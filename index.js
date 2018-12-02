const Discord = require('discord.js');
const bot =  new Discord.Client();
const config = require('./config.json');
const links = require('./links.json');



 // comandos quando o bot estiver pronto
bot.on('ready', () => {
    // bot "jogando/assistindo/ouvindo/streamando"
    bot.user.setActivity('twitch.tv/yonkjr', {type: "Watching"});

    console.log('bot logado!');
});

// comandos de mensagens de usuário
bot.on('message', async message => {
    const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    //transformar os comandos em minusculo
    const command = args.shift().toLowerCase();
    msg = message.content.toLowerCase();
    if (msg.author.bot){
        return indefined;
    }

    if (msg.content.indexOf(config.prefix) !== 0){
        return;
    }
  
  

    
  
    
      

    responseObject = links;
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

   
});
    
    
bot.login(config.token);
