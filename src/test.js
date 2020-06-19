// don't change the client id if you want this example to work
const DiscordRPC = require('discord-rpc');
const clientId = '723635534039089334';

// only needed for discord allowing spectate, join, ask to join
DiscordRPC.register(clientId);

const rpc = new DiscordRPC.Client({ transport: 'ipc' });
const startTimestamp = new Date();

async function setActivity() {
  if (!rpc) {
    return;
  }

  rpc.setActivity({
    details: `uwu`,
    state: 'in slither party',
    startTimestamp,
    largeImageKey: 'snek_large',
    largeImageText: 'tea is delicious',
    smallImageKey: 'snek_small',
    smallImageText: 'i am my own pillows',
    instance: false,
  });
}

rpc.on('ready', () => {
  setActivity();
  console.log('senpai your discord status has benn set!');
  // activity can only be set every 15 seconds
  setInterval(() => {
    setActivity();
  }, 15e3);
});

rpc.login({ clientId }).catch(console.error);