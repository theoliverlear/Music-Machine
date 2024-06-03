import { app, BrowserWindow } from 'electron';
import * as path from 'path';

try {
    require('electron-reloader')(module, {
        electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
    })
} catch { }

let mainWindow: Electron.BrowserWindow | null;

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    });

    mainWindow.loadFile(path.join(__dirname, '../page/free-play.html'));
    // mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
    if (mainWindow === null) createWindow();
});