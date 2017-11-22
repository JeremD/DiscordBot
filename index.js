const Discord = require('discord.js');

const client = new Discord.Client();

// const token = process.env.BOT_TOKEN;
const token = 'MzgyMDc2NjI1OTM3ODkxMzI4.DPQh4A.ifC4ptrmvWzZ2hX8bg6u8Jq2b48';
var prefix = "th!";
var mention = "<@382076625937891328>";
var random;

client.on('ready', () => {
    console.log("Bonjour, je suis Tharja.");
    client.user.setGame("Hinhinhin...");
});

client.on('message', message => {
    var msgc = message.content;
    var msgUser;
    var botShifumi;
    var gagne;
    var egalite;

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