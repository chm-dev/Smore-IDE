const {
  ipcRenderer
} = require('electron');
const loader = require('monaco-loader');
const fs = require('fs');

loader().then((monaco) => {
  let editor = monaco.editor.create(document.querySelector('#container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true
  })

  ipcRenderer.on('open-file', (e, url) => {
    let data = fs.readFileSync(url.slice(7), 'utf-8')
    editor.setModel(monaco.editor.createModel(data,
      'javascript'))
    console.log(data)
  })
})
