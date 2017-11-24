const Discord = require('discord.js');

const client = new Discord.Client();

// const token = process.env.BOT_TOKEN;
const token = 'MzgyODc1NDgwNDUxMzE3NzYw.DPcEKg.wBEEnIzsJnHS_duaaSDOPTfEwpY';
var prefix = "ike!";
var id_bot = "<@382875480451317760>";
var id_jyder = '361220724142112780';

//Lancement bot
client.on('ready', () => {
    console.log("Bonjour, je suis Ike, pour vous servir.");
    client.user.setGame("ETHER!!!");
});

client.on('message', message => {
    var msgc = message.content; //raccourci

    if (!message.author.bot ) { //si l'auteur du message n'est pas un bot
            if (msgc.includes("ping")) {
                message.channel.send('pong');
            } else {
                message.channel.send(msgc);
            }

    }

});

client.login(token);
