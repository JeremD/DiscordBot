const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;
//const token = 'MzgyODc1NDgwNDUxMzE3NzYw.DPcEKg.wBEEnIzsJnHS_duaaSDOPTfEwpY';
var prefix = "ik!";
var id_bot = "<@382875480451317760>";
var id_jyder = '361220724142112780';
//var emoj = '<:nohrianscum:377090236095791104>';
var userp;

//Lancement bot
client.on('ready', () => {
  console.log("Bonjour, je suis Ike. Pour vous servir.");
  client.user.setGame("ETHER!!!");
});

//action message
client.on('message', message => { //*
  var msgc = message.content; //raccourci

  //si l'auteur du message n'est pas un bot
  if (!message.author.bot) {
    if (msgc == 'ping') { //message contient un ping
      message.channel.send('pong');
    } else if (msgc == 'Pong') {
      message.channel.send('ping');
    } else if (msgc.includes('Ike') || msgc.includes('ike')) {
      message.channel.send('ETHER !');
    } else if (msgc.includes('Jul') || msgc.includes('jul')) {
      message.channel.send("On m'appelle l'ovni !");
    } else if (msgc.includes('Pain au chocolat') || msgc.includes('Chocolatine')) {
      message.channel.send('Chocolatine !');
    } else if (msgc.includes('cipher') || msgc.includes('Cipher')) {
      message.channel.send('J"adore ma SR : ETHER !!!');
    } else {
      message.channel.send('MDR');
    }
    // switch (!message.author.bot) {
    //   case msgc == 'ping':
    //     message.channel.send('pong');
    //     break;
    //   case msgc == 'pong':
    //     message.channel.send('ping');
    //     break;
    //   default:
    //     message.channel.send('MDR');
  }

  //si mention après le spréfix
  if (msgc.includes(prefix)) {
    userp = msgc.substr(prefix.length);

    if (userp == 'cc') {
      message.channel.send('Coucou');
    } else if (userp == 'jyder') {
      message.channel.send('Moi aussi j''aime les pâtes');
    } else if (userp == 'rein') {
      message.channel.send('Respect pour Reinhardt <:rein:368038551482400788> ');
    } else if (userp == 'takumi') {
      message.channel.send('Takumerde <:nohrianscum:377090236095791104> ');
    }
  }

  //}

}); //*

client.login(token);
