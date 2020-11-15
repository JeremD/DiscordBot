import { Client } from 'discord.js';
require('dotenv').config();

const client = new Client();
const token = process.env.BOT_TOKEN;
const prefix = "ik!"; // prefixe du bot
const emoj_rein = '<:rein:368038551482400788>';
const userp = msgc.substr(prefix.length);

/** Lancement du bot */
client.on('ready', () => {
  console.log("Bonjour, je suis Ike. Pour vous servir.");
  client.user.setGame("Aether Emblem");
});

/** Action des messages */
client.on('message', message => {

  const msgc = message.content; // raccourci
  const random = Math.floor((Math.random() * 2) + 1);

  // Si l'auteur du message n'est pas un bot
  if (!message.author.bot) {
    if (msgc == 'ping' && random == 2) { // message contient un ping
      message.channel.send('pong');
    } else if (msgc.includes('Pain au chocolat') || msgc.includes('pain au chocolat')) {
      message.channel.send('Chocolatine !');
    }
  }

  // Si l'auteur est un bot
  if (message.author.bot) {
    if (msgc.includes("T'AS DIT QUOI LÀ")) {
      message.channel.send("**OMAE WA MOU SHINDEIRU " + emoj_rein + ' !!!**');
    }
  }

  // Si mention après le spréfix
  if (msgc.includes(prefix)) {
    switch (userp) {
      case 'kawai' || 'cute':
        message.channel.send('◕‿◕');
        break;
      case 'bonjour' || 'salut' || 'hello' | 'hi':
        message.channel.send("Bonjour je suis Ike, mercenaire de Greil, pour vous servir");
        break;
      default:
        break;
    }
  }
});

/** Token */
client.login(token);