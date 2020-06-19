const electron = require('electron');
const { app, BrowserWindow } = require('electron')
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
}

app.whenReady().then(createWindow)


async function setActivity(rpcTitle, rpcState, rpcTimestamp, rpcImageLarge, rpcImageText, rpcSmallImage, rpcSmallText) {
    if (!rpc) {
        return;
    }

    rpc.setActivity({
        details: rpcTitle,
        state: rpcState,
        rpcTimestamp,
        largeImageKey: rpcImageLarge,
        largeImageText: rpcImageText,
        smallImageKey: rpcSmallImage,
        smallImageText: rpcSmallText,
        instance: true,
    });
}

rpc.on('ready', () => {
    setActivity('UwU senpai whatch doin?', 'bruh momento dumero dos', 69, 'uwudaddy', 'chu kinda cute', 'uwu', 'uwu');
    console.log('senpai your discord status has benn set!');
});

rpc.login({ clientId }).catch(console.error);