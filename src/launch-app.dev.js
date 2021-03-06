const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

const createWindow = () => {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1024,
        height: 768,
        icon: path.join(__dirname, 'favicon.ico'),
    });

    // and load the index.html of the app.
    win.loadURL(url.format({
        pathname: 'localhost:4200',
        protocol: 'http:',
        slashes: true
    }));

    // Enable the below line for dev tools
    //win.webContents.openDevTools();
    //win.maximize();

    // Emitted when the window is closed.
    win.on('closed', () => {
        win = null;
    });

}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});