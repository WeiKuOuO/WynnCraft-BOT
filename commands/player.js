const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
        const playerName = args.join("");
        const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
        if(!playerName == ""){
            message.channel.send("你並未輸入玩家名稱...")
            return
        }
            request(urlMain, function(err, response, player) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                }
                player = JSON.parse(player);
                if(!player.data[0].username){
                    message.channel.send("你輸入了錯誤的玩家ID")
                }else{
                    let guildInfo = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setTitle(`${player.data[0].username} 的資訊`)
                        // .addField(":pager:  工會名稱",`\`\`\`css\n${guild.name}\`\`\``,true)
                        // .addField(":mega: 公會前綴",`\`\`\`fix\n${guild.prefix}\`\`\``,true)
                        // .addField(":evergreen_tree: 公會等級",`\`\`\`diff\n+    Level${guild.level}   +\`\`\``,true)
                        // .addField(":earth_asia: 領地數量",`\`\`\`fix\n${guild.territories}\`\`\``,true)
                        // .addField(":calendar_spiral: 創建日期",`\`\`\`xl\n${guild.createdFriendly}\`\`\``,true)
                        // .addField(":seedling: 經驗值",`\`\`\`diff\n-    ${guild.xp}%    -\`\`\``,true)
                    message.channel.send(guildInfo)
                }
            })
        }  
 
module.exports.help = {
  name: 'guild',
};