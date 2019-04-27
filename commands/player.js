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

                const profession = [
                  player.data[0].classes[0].professions,
                  player.data[0].classes[1].professions,
                  player.data[0].classes[2].professions
                ]

                const xp0 = [
                  profession[0].combat,
                  profession[0].woodcutting,
                  profession[0].mining,
                  profession[0].fishing,
                  profession[0].farming,
                  profession[0].alchemism,
                  profession[0].armouring,
                  profession[0].cooking,
                  profession[0].jeweling,
                  profession[0].scribing,
                  profession[0].tailoring,
                  profession[0].weaponsmithing,
                  profession[0].woodworking,
                  profession[0].profession,
                  profession[0].overall
                ]
                const text = [
                  `\`\`\`css\n戰鬥 / Combat | [${xp0[1].level} - ${xp0[1].xp}]`
                ]

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