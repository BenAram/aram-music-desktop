const { app, BrowserWindow } = require('electron')
const path = require('path')
const port = require('./port')
require('./server')

function createWindow () {
  const win = new BrowserWindow({
    width: 1187,
    height: 700,
    minWidth: 1187,
    minHeight: 584,
    icon: path.join(__dirname, 'assets', 'logo.png'),
    title: 'Aram Music',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })
  const ip = 'localhost'
  const startURL = 'http://' + ip + ':' + port
  win.loadURL(startURL)
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
