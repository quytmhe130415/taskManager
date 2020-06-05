const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.setMenu(null)
  mainWindow.loadFile('index.html')
  mainWindow.webContents.openDevTools()
}

app
  .whenReady()
  .then(() => {
    createWindow()
  })