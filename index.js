const Discord = require('discord.js');
const bot =  new Discord.Client();
//const config = require('./config.json');
const links = require('./links.json');
const prefix = process.env.PREFIX




 // comandos quando o bot estiver pronto
bot.on('ready', () => {
    // bot "jogando/assistindo/ouvindo/streamando"
    bot.user.setActivity('twitch.tv/yonkjr', {type: "Watching"});

    console.log('bot logado!');

    
});






// comandos de mensagens de usuário
bot.on('message', async message => {
    let msg = message.content.toLocaleLowerCase();
    let command = message.content.slice(prefix.lenght).trim().split(/ +/g);

    if (message.author.bot){
        return;
    }

    if (message.content.indexOf(prefix) !== 0){
        return;
    } 


    
    

    switch (command[0].toLocaleLowerCase()) {
        case (prefix + "comandos") :
            message.channel.send("``!fb !twitter !insta !live !steam !quest``");
            break;
           
        case (prefix + "fb") :
            //message.channel.send("Entre no nosso grupo do Facebook - https://www.facebook.com/groups/1240399676042202/");
            const embed = {
                "title": "Entre no nosso grupo do Facebook!",
                "color": 4886754,
                "thumbnail": {
                  "url": "https://images2.imgbox.com/b7/59/yXzVPWll_o.png"
                },
                "description": "\nhttps://www.facebook.com/groups/1240399676042202/"
              };
              message.channel.send({ embed });
            break;
            
        case (prefix + "twitter") :
            message.channel.send("Me siga no twitter - https://twitter.com/YonkJunior");
            break;

        case (prefix + "insta") :
            message.channel.send("Siga-me no instagram - https://www.instagram.com/joaoriosjr/");
            break;

        case (prefix + "steam") :
            message.channel.send("Grupo do Steam - https://steamcommunity.com/groups/YonkLives");
            break;

        case (prefix + "quest") :
            message.channel.send("Sub grátis! Faça as quests e troque os pontos por um sub - https://bitbossbattles.io/freetips/yonkjr");
            break;

        case (prefix + "pc") :
            message.channel.send("```======= Gaming PC ======= \n\nCPU: AMD FX-8350 Vishera @4.0Ghz \nWaterCooler: CoolerMaster Seidon 120V \nMotherboard: Asus AMD AM3+ 220W M5A99FX \nGPU: GIGABYTE RADEON RX 580 4GB \nHDD: 1TB Seagate Barracuda 7200rpm \nPSU: EVGA 750W 80 Plus Bronze \nRAM: Corsair 16gb DDR3 1600MHz```");
            break;

        case (prefix + "live") :
            message.channel.send("Live todo dia, quem diria! A partir das 10h da manhã - https://www.twitch.tv/yonkjr");
            break;
        
        default:
            //message.channel.send("Comando inválido!");
            message.reply('Comando inválido! \n\nUtilize **!comandos** para listar os comandos válidos!');
            break;
            

            
         
        
       
            
    }
    

    //const args = message.content.slice(config.prefix.lenght).trim().split(/ +/g);
    //transformar os comandos em minusculo
    //const command = args.shift().toLowerCase();

    
    /*responseObject = links;
    if (responseObject[message.content]){
        message.channel.send(responseObject[message.content]);
    }*/

    


   

    });
    
    
bot.login(proces.env.TOKEN);
