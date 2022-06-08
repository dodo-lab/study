const {app, BrowserWindow, ipcMain, dialog, Menu} = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  // メインプロセスでポートを受け取る.
  ipcMain.on('port', event => {
    const [port] = event.ports;

    port.on('message', event => {
      console.log(event.data);
    });

    port.start();
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
