const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;
var prefix = "ik!";
var id_bot = "<@382875480451317760>";
var id_jyder = '361220724142112780';
var emoj_tak = '<:nohrianscum:377090236095791104>';
var emoj_rein = '<:rein:368038551482400788>';
var userp;
var ether = 'AETHER!!!';
var random = Math.floor((Math.random() * 1) + 1);

//Lancement bot
client.on('ready', () => {
  console.log("Bonjour, je suis Ike. Pour vous servir.");
  client.user.setGame("Pâtes of Radiance");
});

//action message
client.on('message', message => { //*
  var msgc = message.content; //raccourci

  //***********************************************************************//////
  //si l'auteur du message n'est pas un bot
  if (!message.author.bot) {
    if (msgc == 'ping' && random == 1) { //message contient un ping
      message.channel.send('pong');
    }
    // else if (msgc.includes('Ike') || msgc.includes('ike')) {
    //   message.channel.send('ETHER !!!');
    // }
    else if (msgc.includes('Pain au chocolat') || msgc.includes('pain au chocolat') || msgc.includes('Chocolatine') || msgc.includes('chocolatine')) {
      message.channel.send('Chocolatine !');
    }
    // else if (msgc.includes('cipher') || msgc.includes('Cipher')) {
    //   message.channel.send("J'adore ma SR : ETHER !!!");
    // }
 else if (msgc.includes('ik!kick') || msgc.includes('ik!ban')) {
      message.channel.send("Désolé, je ne peux pas faire ça.");
    }
    //else if (msgc.includes('Takumi')) {
    //   message.channel.send("TAAAKKKUUUMMMIII !!! JE T'AAAAIIIIMMMMEEEE " + ':heart_eyes:' + ':heart_eyes:' + ':heart_eyes:');
    // }
  }


  //***********************************************************************//////
  //Si l'auteur est un bot
  if (message.author.bot) {
    if (msgc.includes("T'AS DIT QUOI LÀ") || msgc.includes("TA GUEULE")) {
      message.channel.send("**OMAE WA MOU SHINDEIRU " + emoj_rein + emoj_rein + emoj_rein + ' !!!**');
    }
    //else if (msgc == emoj_rein) {
    //   message.channel.send('Je voudrai une emote en mon nom s\'il vous plaît.')
    // }
  }


  //***********************************************************************//////
  //si mention après le spréfix
  if (msgc.includes(prefix)) {
    userp = msgc.substr(prefix.length);

    switch (userp) {
      case 'jyder':
        message.channel.send('Moi aussi j\'aime les pâtes ♨');
        break;
      case 'rein':
        message.channel.send('Respect pour Reinhardt ' + emoj_rein);
        break;
      case 'takumi':
        message.channel.send('Takumerde ' + emoj_tak);
        break;
      case 'cute':
        message.channel.send('◕‿◕');
        break;
      case 'bear':
        message.channel.send('ʕ ᵔᴥᵔ ʔ');
        break;
      case 'fanart':
        message.channel.send("*NULL*");
        break;
      case 'bk':
        message.channel.send("Le Black Knight et moi sommes les meilleurs amis du monde");
        break;
      case 'kick':
        message.channel.send("```SyntaxError: Unexpected identifier at createScript (vm.js:80:10)  at Object.runInThisContext (vm.js:152:10) at Module._compile (module.js:605:28)```");
        break;
      default:
        break;

    }

  }



}); //*

client.login(token);
