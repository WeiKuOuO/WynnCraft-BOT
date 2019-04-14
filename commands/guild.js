const Discord = require("discord.js")

module.exports.run = async (bot, message, args, request) => {
  
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
                message.channel.send(guildInfo)
            }
        })
    }    
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")

module.exports.help = {
  name: 'guild',
};