const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openUrl: (url) => ipcRenderer.send('open-url', url),
  cloneRepo: (repoUrl) => ipcRenderer.send('clone-repo', repoUrl),
  setupProject: (setupScript) => ipcRenderer.send('setup-project', setupScript),
});

ipcRenderer.on('setup-output', (event, output) => {
  console.log(output);
});
