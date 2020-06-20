// don't change the client id if you want this example to work
const { clientId } = require('../config.json');
const DiscordRPC = require('discord-rpc');

console.log(clientId);
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();  


async function setActivity(rpcTitle, rpcState, rpcTimestamp, rpcImageLarge, rpcImageText, rpcSmallImage, rpcSmallText) {


  if(!rpc){
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


  console.log('senpai your discord status has been set!')
}


rpc.on('ready', () => {
  console.log('senpai your discord status has benn set!');
});

rpc.login({ clientId }).catch(console.error);