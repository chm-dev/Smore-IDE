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
   tray = new Tray(`${__dirname}/icon.jpg`)
  const contextMenu = Menu.buildFromTemplate([
    {label: 'Smore-IDE'},
    {label: 'DevMode', type: 'radio', checked: true}
  ])
  tray.setToolTip('DO NOT DISTRIBUTE')
  tray.setContextMenu(contextMenu)
  function worker() {
  if( contextMenu.items[2].checked === true) {
    // Make a change to the context menu
    contextMenu.items[2].checked = false

    // Call this again for Linux because we modified the context menu
    appIcon.setContextMenu(contextMenu)
  }
worker()
}

  mainWindow.webContents.on('will-navigate', (e, url) => {
    e.preventDefault();

    mainWindow.webContents.send('open-file', url);
  })
})