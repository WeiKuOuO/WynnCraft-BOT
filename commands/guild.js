const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
        const guildName = args.join(" ");
        const urlMain = "https://api.wynncraft.com/public_api.php?action=guildStats&command=" + (guildName);
            request(urlMain, function(err, response, guild) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                }
                guild = JSON.parse(guild);
                if(guild.error){
                    message.channel.send("你輸入了錯誤的工會名稱,可能是大小寫錯誤了")
                }else{
                    let guildInfo = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setTitle(`${guild.name} 的資訊`)
                        .setDescription(`公會等級 **Level${guild.level}** | 經驗值 ${guild.xp}%`)
                    message.channel.send(guildInfo)
                }
            })
        }  
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")

module.exports.help = {
  name: 'guild',
};