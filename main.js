const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const { exec } = require('child_process');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('open-url', (event, url) => {
  shell.openExternal(url);
});

ipcMain.on('clone-repo', (event, repoUrl) => {
  exec(`git clone ${repoUrl}`, (error, stdout, stderr) => {
      console.log('HERE ',stderr, stdout)
    if (error) {
      console.error(`Error cloning repo: ${stderr}`);
      return;
    }
    exec(`cd base-app`,(error)=> {
        exec(`npm install`)
    })
    console.log(`Repo cloned: ${stdout}`);
  });
});

ipcMain.on('setup-project', (event, setupScript) => {
  exec(`sh ${setupScript}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error setting up project: ${stderr}`);
      return;
    }
    console.log(`Project setup: ${stdout}`);
  });
});
