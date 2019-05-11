const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {/* 
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
                if(player.message == "Bad Request"){
                    message.channel.send("你輸入了錯誤的玩家ID")
                }else{
                    let guildInfo = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setTitle(`${player.data[0].username} 的資訊`)
                        .addField("等級",`\`\`\`css\n${player.data[0].classes[0].level}\`\`\``)
                        message.channel.send(guildInfo)
                        let playerInfo = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setDescription(`${player.data[0].username} 的 ${player.data[0].classes[0].name} 資訊`)
                        .addField(`${player.data[0].classes[0].name}`,text[1].true)
                        .addField("戰鬥等級",`\`\`\`css\n${player.data[0].classes[0].professions.combat.level}\`\`\``,true)
                        .addField("煉金等級",`\`\`\`css\n${player.data[0].classes[0].professions.alchemism.level}\`\`\``,true)
                        .addField("廚藝等級",`\`\`\`css\n${player.data[0].classes[0].professions.cooking.level}\`\`\``,true)
                        .addField("挖礦等級",`\`\`\`css\n${player.data[0].classes[0].professions.mining.level}\`\`\``,true)
                        .addField("伐木等級",`\`\`\`css\n${player.data[0].classes[0].professions.woodcutting.level}\`\`\``,true)
                        .addField("裝甲等級",`\`\`\`css\n${player.data[0].classes[0].professions.armouring.level}\`\`\``,true)
                        .addField("農業等級",`\`\`\`css\n${player.data[0].classes[0].professions.farming.level}\`\`\``,true)
                        .addField("製卷等級",`\`\`\`css\n${player.data[0].classes[0].professions.scribing.level}\`\`\``,true)
                        .addField("紡織等級",`\`\`\`css\n${player.data[0].classes[0].professions.tailoring.level}\`\`\``,true)
                        .addField("製劍等級",`\`\`\`css\n${player.data[0].classes[0].professions.weaponsmithing.level}\`\`\``,true)
                        .addField("木工等級",`\`\`\`css\n${player.data[0].classes[0].professions.woodworking.level}\`\`\``,true)
                        .addField("釣魚等級",`\`\`\`css\n${player.data[0].classes[0].professions.armouring.level}\`\`\``,true)
                        .addField("飾品等級",`\`\`\`css\n${player.data[0].classes[0].professions.jeweling.level}\`\`\``,true);
                        message.channel.send(playerInfo)
                        const data1 = player.data[0].classes[1]
                        if ( typeof data1 !== 'undefined' && data1 )
                        {
                          let playerinfo1 = new Discord.RichEmbed()
                              .setColor(0x34AB00)
                              .setDescription(`${player.data[0].username} 的 ${player.data[0].classes[1].name} 資訊`)
                              .addField("戰鬥等級",`\`\`\`css\n${player.data[0].classes[1].professions.combat.level}\`\`\``,true)
                              .addField("煉金等級",`\`\`\`css\n${player.data[0].classes[1].professions.alchemism.level}\`\`\``,true)
                              .addField("廚藝等級",`\`\`\`css\n${player.data[0].classes[1].professions.cooking.level}\`\`\``,true)
                              .addField("挖礦等級",`\`\`\`css\n${player.data[0].classes[1].professions.mining.level}\`\`\``,true)
                              .addField("伐木等級",`\`\`\`css\n${player.data[0].classes[1].professions.woodcutting.level}\`\`\``,true)
                              .addField("裝甲等級",`\`\`\`css\n${player.data[0].classes[1].professions.armouring.level}\`\`\``,true)
                              .addField("農業等級",`\`\`\`css\n${player.data[0].classes[1].professions.farming.level}\`\`\``,true)
                              .addField("製卷等級",`\`\`\`css\n${player.data[0].classes[1].professions.scribing.level}\`\`\``,true)
                              .addField("紡織等級",`\`\`\`css\n${player.data[0].classes[1].professions.tailoring.level}\`\`\``,true)
                              .addField("製劍等級",`\`\`\`css\n${player.data[0].classes[1].professions.weaponsmithing.level}\`\`\``,true)
                              .addField("木工等級",`\`\`\`css\n${player.data[0].classes[1].professions.woodworking.level}\`\`\``,true)
                              .addField("釣魚等級",`\`\`\`css\n${player.data[0].classes[1].professions.armouring.level}\`\`\``,true)
                              message.channel.send(playerinfo1);
                        }
                        else
                        {
                          let playerinfo1 = new Discord.RichEmbed()
                          .setDescription(`${player.data[0].username} 的資訊`)
                          .addField(`無`,"此玩家無此職業");
                          message.channel.send(playerinfo1);
                        }
                        const data2 = player.data[0].classes[2]
                        if ( typeof data2 !== 'undefined' && data2 )
                        {
                          let playerinfo2 = new Discord.RichEmbed()
                              .setColor(0x34AB00)
                              .setDescription(`${player.data[0].username} 的 ${data2.name} 資訊`)
                              .addField("戰鬥等級",`\`\`\`css\n${data2.professions.combat.level}\`\`\``,true)
                              .addField("煉金等級",`\`\`\`css\n${data2.professions.alchemism.level}\`\`\``,true)
                              .addField("廚藝等級",`\`\`\`css\n${data2.professions.cooking.level}\`\`\``,true)
                              .addField("挖礦等級",`\`\`\`css\n${data2.professions.mining.level}\`\`\``,true)
                              .addField("伐木等級",`\`\`\`css\n${data2.professions.woodcutting.level}\`\`\``,true)
                              .addField("裝甲等級",`\`\`\`css\n${data2.professions.armouring.level}\`\`\``,true)
                              .addField("農業等級",`\`\`\`css\n${data2.professions.farming.level}\`\`\``,true)
                              .addField("製卷等級",`\`\`\`css\n${data2.professions.scribing.level}\`\`\``,true)
                              .addField("紡織等級",`\`\`\`css\n${data2.professions.tailoring.level}\`\`\``,true)
                              .addField("製劍等級",`\`\`\`css\n${data2.professions.weaponsmithing.level}\`\`\``,true)
                              .addField("木工等級",`\`\`\`css\n${data2.professions.woodworking.level}\`\`\``,true)
                              .addField("釣魚等級",`\`\`\`css\n${data2.professions.armouring.level}\`\`\``,true)
                              message.channel.send(playerinfo2);
                        }
                        else
                        {
                          let playerinfo2 = new Discord.RichEmbed()
                          .setDescription(`${player.data[0].username} 的資訊`)
                          .addField(`無`,"此玩家無此職業");
                          message.channel.send(playerinfo2);
                        }


                        //.addField("等級",`\`\`\`css\n${player.data[0].classes[0].level}\`\`\``,true)
                        // .addField(":pager:  工會名稱",`\`\`\`css\n${guild.name}\`\`\``,true)
                        // .addField(":mega: 公會前綴",`\`\`\`fix\n${guild.prefix}\`\`\``,true)
                        // .addField(":evergreen_tree: 公會等級",`\`\`\`diff\n+    Level${guild.level}   +\`\`\``,true)
                        // .addField(":earth_asia: 領地數量",`\`\`\`fix\n${guild.territories}\`\`\``,true)
                        // .addField(":calendar_spiral: 創建日期",`\`\`\`xl\n${guild.createdFriendly}\`\`\``,true)
                        // .addField(":seedling: 經驗值",`\`\`\`diff\n-    ${guild.xp}%    -\`\`\``,true)

                }
            })
        } */
    }


module.exports.help = {
  name: 'playerfull',
};
