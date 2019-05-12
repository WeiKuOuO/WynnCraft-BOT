const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
  const playerName = args.join("");
  const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
  if (playerName == "") {
    message.channel.send("你並未輸入玩家名稱...")
  } else {
    request(urlMain, function (err, response, player) {
      if (err) {
        console.log(err);
        return message.channel.send('在查詢時出了點問題:P');
      }
      player = JSON.parse(player);
      if (player.message == "Bad Request") {
        message.channel.send("你輸入了錯誤的玩家ID")
      } else {
        if (!player.data[0].classes[5]) {
          if (!player.data[0].classes[4]) {
            if (!player.data[0].classes[3]) {
              if (!player.data[0].classes[2]) {
                if (!player.data[0].classes[1]) {
                  if (!player.data[0].classes[0]) {
                    message.channel.send("你輸入的玩家可能還沒創建角色喔")
                    return
                  }
                  if (player.data[0].classes[0].name == "assassin") {
                    const assassin = bot.emojis.get("577051297027457036");
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer") {
                    var role1 = ":bow_and_arrow:  弓箭手 / Archer"
                  }
                  // if (player.data[0].classes[0].name == "assassin") {
                  //   var role1 = ":dagger: 刺客 / Assassin"
                  // }
                  // if (player.data[0].classes[0].name == "assassin") {
                  //   var role1 = ":dagger: 刺客 / Assassin"
                  // }
                  message.channel.send(role1)
                }
              }
            } 
          } 
        }
      }
    })
  } 
}


// 
//                   if (player.data[0].classes[1].name == "assassin") {
//                     const xp0 = [
//                       player.data[0].classes[0].professions.combat,
//                       player.data[0].classes[0].professions.woodcutting,
//                       player.data[0].classes[0].professions.mining,
//                       player.data[0].classes[0].professions.fishing,
//                       player.data[0].classes[0].professions.farming,
//                       player.data[0].classes[0].professions.alchemism,
//                       player.data[0].classes[0].professions.armouring,
//                       player.data[0].classes[0].professions.cooking,
//                       player.data[0].classes[0].professions.jeweling,
//                       player.data[0].classes[0].professions.scribing,
//                       player.data[0].classes[0].professions.tailoring,
//                       player.data[0].classes[0].professions.weaponsmithing,
//                       player.data[0].classes[0].professions.woodworking,
//                       player.data[0].classes[0].professions.profession,
//                       player.data[0].classes[0].professions.overall
//                     ]
//                     const xp = [
//                       xp0
//                     ]
//                     const text = [
//                       `\`\`\`css\n戰鬥 / Combat | [${xp[0][0].level} - ${xp[0][0].xp}]\`\`\``
//                     ]
//                     var role1 = ":dagger: 刺客 / Assassin"
//                     let playerInfo = new Discord.RichEmbed()
//                       .setTitle(`${player.data[0].username} 的玩家資訊`)
//                       .addField(`${role1} 的等級資訊`, text, true)
//                     essage.channel.send(playerInfo)
//                   }
                

module.exports.help = {
  name: 'player',
};