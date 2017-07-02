const {
  app,
  BrowserWindow,
  Menu
} = require('electron')

let tray = null
app.on('ready', () => {
  let mainWindow = new BrowserWindow()
  mainWindow.loadURL(`file://${__dirname}/index.html`)

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();

    mainWindow.webContents.send('open-file', url);
  })
})