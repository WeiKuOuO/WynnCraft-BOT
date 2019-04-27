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
                player = JSON.parse(player);
                if(player.message == "Bad Request"){
                  message.channel.send("你輸入了錯誤的玩家ID")
                }else{
                  const xp0 = [
                    player.data[0].classes[0].professions.combat,
                    player.data[0].classes[0].professions.woodcutting,
                    player.data[0].classes[0].professions.mining,
                    player.data[0].classes[0].professions.fishing,
                    player.data[0].classes[0].professions.farming,
                    player.data[0].classes[0].professions.alchemism,
                    player.data[0].classes[0].professions.armouring,
                    player.data[0].classes[0].professions.cooking,
                    player.data[0].classes[0].professions.jeweling,
                    player.data[0].classes[0].professions.scribing,
                    player.data[0].classes[0].professions.tailoring,
                    player.data[0].classes[0].professions.weaponsmithing,
                    player.data[0].classes[0].professions.woodworking,
                    player.data[0].classes[0].professions.profession,
                    player.data[0].classes[0].professions.overall
                  ]
                  const xp1 = [
                    player.data[0].classes[1].professions.combat,
                  ]
                  const xp2 = [
                    player.data[0].classes[2].professions.combat,
                  ]
                  const xp3 = [
                    player.data[0].classes[3].professions.combat,
                  ]
                  const xp4 = [
                    player.data[0].classes[4].professions.combat,
                  ]
                  const xp = [
                    xp0,
                    xp1,
                    xp2,
                    xp3,
                    xp4
                  ]
                  const text = [
                    `\`\`\`css\n戰鬥 / Combat | [${xp[0][0].level} - ${xp[0][0].xp}]\`\`\``
                  ]  
                  if(!player.data[0].classes[0].name){
                     message.channel.send("此玩家並沒有創建角色")
                  } else {
                    if(player.data[0].classes[5].name){

                    }else{
                      if(player.data[0].classes[4].name){
                      
                      }else{
                        if(player.data[0].classes[3].name){
                        
                        }else{
                          if(player.data[0].classes[2].name){
                        
                          }else{
                            if(player.data[0].classes[1].name){
                              var role1
                              if(player.data[0].classes[1].name == "assassin"){
                                var role1 = ":dagger: 刺客 / Assassin"
                              }
                              if(player.data[0].classes[1].name == "assassin"){
                                var role1 = ":dagger: 刺客 / Assassin"
                                let playerInfo = new Discord.RichEmbed()
                                  .setTitle(`${player.data[0].username} 的玩家資訊`)
                                  .addField(`${role1} 的等級資訊`,text,true)
                                message.channel.send(playerInfo)
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
            })
        }
    }


module.exports.help = {
  name: 'player',
};