const {
  app,
  BrowserWindow,
  Menu, 
  Tray
} = require('electron')

let tray = null
app.on('ready', () => {
  let mainWindow = new BrowserWindow()
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  mainWindow.webContents.openDevTools()
   tray = new Tray(`${__dirname}/icon.jpg`)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Smore-IDE'},
    {label: 'Item3', type: 'radio', checked: true}
  ])
  tray.setToolTip('DO NOT DISTRIBUTE')
  tray.setContextMenu(contextMenu)

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();

    mainWindow.webContents.send('open-file', url);
  })
})
