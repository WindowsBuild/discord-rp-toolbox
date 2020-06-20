const electron = require('electron');
const { app, BrowserWindow, Notification } = require('electron')
const DiscordRPC = require('discord-rpc');
const clientId = '723635534039089334';


DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  win.loadFile('./src/index.html')

  let myNotification = new Notification('Discord RPC', {
    body: 'Your Discord Status Has Been Set!'
  })
  
  myNotification.show();

  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
}

app.whenReady().then(createWindow)

