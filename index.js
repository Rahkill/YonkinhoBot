const Discord = require('discord.js');
const bot =  new Discord.Client();
//const config = require('./config.json');
const links = require('./links.json');



 // comandos quando o bot estiver pronto
bot.on('ready', () => {
    // bot "jogando/assistindo/ouvindo/streamando"
    bot.user.setActivity('twitch.tv/yonkjr', {type: "Watching"});

    console.log('bot on!');
});

// comandos de mensagens de usuário
bot.on('message', message => {
    
    msg = message.content.toLowerCase();
    if (message.author.bot){
        return;
    }

    if (message.content.indexOf(PREFIX) !== 0){
        return;
    }
  
    const args = message.content.slice(PREFIX.lenght).trim().split(/ +/g);
    //transformar os comandos em minusculo
    const command = args.shift().toLowerCase();
 
    console.log(`Args: ${args} \nCommand: ${command}`);

    
  
    
      

    responseObject = links;
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

   
});
    
    
bot.login('TOKEN');
