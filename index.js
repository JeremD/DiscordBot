const Discord = require('discord.js');

const client = new Discord.Client();

// const token = process.env.BOT_TOKEN;
const token = 'MzgyODc1NDgwNDUxMzE3NzYw.DPcEKg.wBEEnIzsJnHS_duaaSDOPTfEwpY';
var prefix = "ike!";
var mention = "<@382076625937891328>";
var random;

client.on('ready', () => {
    console.log("Bonjour, je suis Ike, pour vous servir.");
    client.user.setGame("Ike, ETHER !!!");
});

client.on('message', message => {
    var msgc = message.content;

    if (!message.author.bot ) {
        if (message.author.id == '148727789640613888') { // Moi pour l'instant
            if (msgc.includes("ping")) {
                message.channel.send('pong');
            } else {
                message.channel.send(msgc);
            }
        }
    }

});

client.login(token);
