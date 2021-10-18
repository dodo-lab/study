import { EventEmitter } from 'events';
import {
  Commands,
  Events,
  SafeEmitter,
  Protocol,
  MatrixProtocol,
} from './common';

const commandEmitter: SafeEmitter<Commands> = new EventEmitter();
const eventEmitter: SafeEmitter<Events> = new EventEmitter();

const worker = new Worker('worker.bundle.js');

// Workerから送信されるイベントをリッスンし、型安全なイベントエミッターを使って、再発行する
worker.onmessage = (event) => {
  console.log('[Main]', event.data);
  eventEmitter.emit(event.data.type, ...event.data.data);
};

// このスレッドによって発行されるコマンドをリッスンし、それらをWorkerに送信
commandEmitter.on('sendMessageToThread', (...data) =>
  worker.postMessage({ type: 'sendMessageToThread', data })
);
commandEmitter.on('createThread', (...data) =>
  worker.postMessage({ type: 'createThread', data })
);
commandEmitter.on('addUserToThread', (...data) =>
  worker.postMessage({ type: 'addUserToThread', data })
);
commandEmitter.on('removeUserFromThread', (...data) =>
  worker.postMessage({ type: 'removeUserFromThread', data })
);

// 新しいスレッドが作成されたことをWorkerが知らせてきた
eventEmitter.on('createdThread', (threadId, participants) =>
  console.log('Created a new chat thread!', threadId, participants)
);

// コマンドをWorkerに送信
commandEmitter.emit('createThread', [123, 456]);
commandEmitter.emit('addUserToThread', 100, 123);
commandEmitter.emit('removeUserFromThread', 100, 123);
commandEmitter.emit('sendMessageToThread', 100, 'to worker-thread');

// 型安全なプロトコル
function createProtocol<P extends Protocol>(script: string) {
  return <K extends keyof P>(command: K) =>
    (...args: P[K]['in']) =>
      new Promise<P[K]['out']>((resolve, reject) => {
        const worker = new Worker(script);
        worker.onerror = reject;
        worker.onmessage = (event) => resolve(event.data);
        worker.postMessage({ command, args });
      });
}
setTimeout(() => {
  const runWithMatrixProtocol = createProtocol<MatrixProtocol>(
    'matrix-worker.bundle.js'
  );
  const parallelDeterminant = runWithMatrixProtocol('determinant');
  parallelDeterminant([
    [1, 2],
    [3, 4],
  ]).then((determinant) => console.log('[Main]', determinant));
}, 500);
