const Discord = require('discord.js');
const bot =  new Discord.Client();
const config = require('./config.json');
const links = require('./links.json');

/*
//heroku
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log('Listening on ${ PORT }'))
  */


 // comandos quando o bot estiver pronto
bot.on('ready', () => {
    // bot "jogando/assistindo/ouvindo/streamando"
    //bot.user.setActivity('twitch.tv/yonkjr');
    bot.user.setActivity('${bot.users.size} users', {type: "Watching"});
  
    console.log('bot logado!');
});

// comandos de mensagens de usuário
bot.on('message', message => {
    if (message.author.bot){
        return;
    }

    if (message.content.indexOf(config.prefix) !== 0){
        return;
    }

    const msgs = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    //transformar os comandos em minusculo
    const comando = msgs.shift().toLowerCase();

    responseObject = links;
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }

   

    });
    
    
bot.login(config.token);
