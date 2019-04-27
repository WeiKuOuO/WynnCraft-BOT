const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
        const playerName = args.join("");
        const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
        if(playerName == ""){
            message.channel.send("你並未輸入玩家名稱...")
        }else{
            request(urlMain, function(err, response, player) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                }
                const classes = args[1]
                player = JSON.parse(player);

              
                let onlinecheck = player.data[0].meta.location.online
                if ( typeof onlinecheck !== 'false' && onlinecheck )
                {
                  var onlineserver = player.data[0].meta.location.server
                }
                else
                {
                  var onlineserver = `玩家名: ${player.data[0].username} 不在線上`
                }
                if(player.message == "Bad Request"){
                    message.channel.send("你輸入了錯誤的玩家ID")
                }else{
                  let guildInfo = new Discord.RichEmbed()
                      .setColor(0x34AB00)
                      .setTitle(`${player.data[0].username} 的資訊`)
                      .addField(`${player.data[0].classes[0].name}`,text[1],true)
                      .addField("等級",`\`\`\`css\n${player.data[0].classes[0].level}\`\`\``)
                      .addField("所在分流",`\`\`\`css\n${onlineserver}\`\`\``) 
                  message.channel.send(guildInfo)

                }
            })
        }
    }


module.exports.help = {
  name: 'player',
};