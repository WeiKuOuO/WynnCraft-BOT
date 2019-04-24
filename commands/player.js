const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
        const playerName = args.join(" ");
        const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
            request(urlMain, function(err, response, player) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                }
                player = JSON.parse(player);
                console.log(player.data[0['username']])
                console.log(urlMain)
                console.log(player.data[0].username)
                console.log(player.data.username)
            })
        }  
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")

module.exports.help = {
  name: 'guild',
};