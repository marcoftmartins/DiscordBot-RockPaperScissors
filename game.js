module.exports = async (msg,client) => {
  const validOptions = ['rock','paper','scissors']
  msg.reply('Rock, Paper, Scissors !\nChoose your option:')

  client.on('messageCreate', (msg) => {
    if (!msg.author.bot){
    // Randomizer to choose the bot option
    let optRandomizer = Math.floor(Math.random()*validOptions.length)
    let botOption = validOptions[optRandomizer]
    // Sets the user option to lower case and remove all spaces
    console.log(botOption)
    let userOption = msg.content.split(' ')[0].toLowerCase()
    
      switch (true) {
        case (botOption == 'rock' && userOption == 'scissors' || botOption == 'paper' && userOption == 'rock' ||
            botOption == 'scissors' && userOption == 'paper'):
          msg.reply(`${botOption.toUpperCase()}! Yes, i won 😁`)
        break;
        case (botOption == 'rock' && userOption == 'paper' || botOption == 'paper' && userOption == 'scissors' ||
            botOption == 'scissors' && userOption == 'rock'):
          msg.reply(`${botOption.toUpperCase()}! Oh no, i lost 😔`)
          break;
        case (botOption == userOption):
          msg.reply(`${botOption.toUpperCase()}! It's a tie 😀`)
          break;
        default:
          msg.reply(`${userOption} is not a valid option. Insert a valid option to play`)
          break;
      }
    }
  })
}