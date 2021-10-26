// Imports
const { Client, Intents } = require('discord.js');
const client = new Client({ 
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ] });
const startGame = require('./game.js')

// Import the bot token form .env file
require('dotenv').config()

// Executes once to see if the bot is running
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Sets the bot activity to display "Playing Rock, Paper, Scissors"
  client.user.setActivity('Rock, Paper, Scissors!','PLAYING')
});

// Called when someone sends a message
client.on('messageCreate', (message) => {
  if (isCommand(message)){
    // Removes the ! char
    let cmd = message.content.substring(1);
    if(cmd === 'play'){
      startGame(message,client);
    }
  }
})

// Login into the API
client.login(process.env.BOT_TOKEN);


function isCommand(msg){
  if (msg.content.charAt(0) === '!'){
    return true;
  }
}