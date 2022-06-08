const {ipcRenderer, contextBridge} = require('electron');

const channel = new MessageChannel();

// port1をメインプロセス用、port2をレンダラープロセス用として扱う（逆も可）.
const {port1, port2} = channel;

// 受信側がリスナーを登録する前にメッセージを送信しても問題ない.
// リスナーが登録されるまでキューに積まれる.
port2.postMessage({answer: 'start'});

// メインプロセスに'port1'を送信する.
ipcRenderer.postMessage('port', null, [port1]);

contextBridge.exposeInMainWorld('electronAPI', {
  postMessage: message => port2.postMessage({answer: message}),
});
