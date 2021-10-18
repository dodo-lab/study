import { EventEmitter } from 'events';
import { Commands, Events, SafeEmitter } from './common';

function workerLog(...log: unknown[]) {
  console.log('[Worker]', ...log);
}

// メインスレッドから送られるイベントをリッスン
const commandEmitter: SafeEmitter<Commands> = new EventEmitter();

// メインスレッドに対してイベントを発行
const eventEmitter: SafeEmitter<Events> = new EventEmitter();

// 型安全なイベントエミッターを使って、メインスレッドからの入力コマンドをラップ
onmessage = (command) =>
  commandEmitter.emit(command.data.type, ...command.data.data);

// Workerによって発行されたイベントをリッスンし、それらをメインスレッドに送信
eventEmitter.on('receivedMessage', (...data) =>
  postMessage({ type: 'receivedMessage', data })
);
eventEmitter.on('createdThread', (...data) => {
  postMessage({ type: 'createdThread', data });
});
eventEmitter.on('addedUserToThread', (...data) =>
  postMessage({ type: 'addedUserToThread', data })
);
eventEmitter.on('removedUserFromThread', (...data) =>
  postMessage({ type: 'removedUserFromThread', data })
);

// メインスレッドからのコマンドに応答
commandEmitter.on('createThread', (participants) =>
  workerLog('receive createThread', participants)
);
commandEmitter.on('sendMessageToThread', (threadId, message) =>
  workerLog('receive sendMessageToThread', threadId, message)
);
commandEmitter.on('addUserToThread', (threadId, userId) =>
  workerLog('receive addUserToThread', threadId, userId)
);
commandEmitter.on('removeUserFromThread', (threadId, userId) =>
  workerLog('receive removeUserFromThread', threadId, userId)
);

// メインスレッドにイベントを送信
eventEmitter.emit('createdThread', 123, [456, 789]);
eventEmitter.emit('receivedMessage', 100, 123, 'to main thread');
eventEmitter.emit('addedUserToThread', 100, 123);
eventEmitter.emit('removedUserFromThread', 100, 123);
