const Discord = require('discord.js'); 
const rm = require('discord.js-reaction-menu');
module.exports.run = (bot, message, args, tools) => {
 
  new rm.menu(message.channel, message.author.id, [new Discord.RichEmbed({title:'test'}), new Discord.RichEmbed({title:'test2'}),
    new Discord.RichEmbed({title:'test3'}), new Discord.RichEmbed({title:'test4'}), new Discord.RichEmbed({title:'test5'})]);
 
}

module.exports.help = {
    name: "test"
}
