const Discord = require('discord.js');
const client = new Discord.Client();

const token = process.env.BOT_TOKEN;
var prefix = "ik!";
var id_bot = "<@382875480451317760>";
var id_jyder = '361220724142112780';
var id_takumi = '377090236095791104';
var id_rein = '368038551482400788';
var emoj_tak = '<:nohrianscum:377090236095791104>';
var cat = ':smiley_cat:'
var emoj_rein = '<:rein:368038551482400788>';
var userp;
var ether = 'AETHER!!!';
var random;

//Lancement bot
client.on('ready', () => {
  console.log("Bonjour, je suis Ike. Pour vous servir.");
  client.user.setGame("Aether Emblem");
});

//action message
client.on('message', message => { //*
  var msgc = message.content; //raccourci
  random = Math.floor((Math.random() * 2) + 1);
  //***********************************************************************//////
  //si l'auteur du message n'est pas un bot
  if (!message.author.bot) {
    if (msgc == 'ping' && random == 2) { //message contient un ping
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
    } else if (msgc.includes('ether') || (msgc.includes('aether')) {
        message.channel.send('AETHER!!!');
      }
    }
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
        message.channel.send('Magic is everything ' + emoj_rein);
        break;
      case 'takumi':
        message.channel.send('Takumerde ' + emoj_tak);
        break;
      case 'kawai':
        message.channel.send('◕‿◕');
        break;
      case 'godh':
        message.channel.send('Votez Hector !');
        break;
      case 'bk':
        message.channel.send("Le Black Knight et moi sommes les meilleurs amis du monde");
        break;
      case 'kick':
        message.channel.send("```SyntaxError: Unexpected identifier at createScript (vm.js:80:10)  at Object.runInThisContext (vm.js:152:10) at Module._compile (module.js:605:28)```");
        break;
      case 'cat':
        message.channel.send("Miaou " + cat);
        break;
      case 'bonjour' || 'salut':
        message.channel.send("Bonjour je suis Ike, mercenaire de Greil, pour vous servir");
        break;
      case 'tms':
        message.channel.send("Ah kimi o yobu senritsu wa kono sora no hate e \n")
        message.channel.send("Eien o chikai shukufuku o sazukeyou \n")
        message.channel.send("Mawari tsuzukeru sadame to shite mo \n")
        message.channel.send("Ima o ikite hoshii\n")
        message.channel.send("Sa mezame yo\n")
        message.channel.send("Hikari wo ukete\n")
        message.channel.send("Faia Enbulemu\n")
        message.channel.send("Mamoritai mono ga aru\n")
        message.channel.send("Toki o koete mo kawarazu ni\n")
        message.channel.send("Faia Enbulemu (eien o)\n")
        message.channel.send("Mamoritai hito ga iru (chikai)\n")
        message.channel.send("Ikiru ryu ga (hikari o) soko ni aru\n")
        message.channel.send("Sa mezame yo");
        break;
      default:
        break;

    }

  }



}); //*

client.login(token);
