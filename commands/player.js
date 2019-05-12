const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {

  const assassin = bot.emojis.get("577051297027457036");
  const warrior = bot.emojis.get("577054598062276619");
  const archer = bot.emojis.get("577054598238306314");
  const mage = bot.emojis.get("577055020168511488");

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
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer") {
                    var role1 = `${archer}  弓箭手 / Archer`
                  }
                  if (player.data[0].classes[0].name == "warrior") {
                    var role1 = `${warrior} 戰士 / Warrior`
                  }
                  if (player.data[0].classes[0].name == "mage") {
                    var role1 = `${mage} 法師 / Mage`
                  }
                  if (player.data[0].classes[0].name == "ninja") {
                    var role1 = `${assassin} 忍者 / Ninja`
                  }
                  if (player.data[0].classes[0].name == "hunter") {
                    var role1 = `${archer}  獵人 / Hunter`
                  }
                  if (player.data[0].classes[0].name == "knight") {
                    var role1 = `${warrior} 騎士 / Knight`
                  }
                   if (player.data[0].classes[0].name == "darkwizard") {
                     var role1 = `${mage} 黑暗巫師 / Dark Wizard`
                  }

                  if (player.data[0].classes[0].name == "assassin1") {
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer1") {
                    var role1 = `${archer}  弓箭手 / Archer`
                  }
                  if (player.data[0].classes[0].name == "warrior1") {
                    var role1 = `${warrior} 戰士 / Warrior`
                  }
                  if (player.data[0].classes[0].name == "mage1") {
                    var role1 = `${mage} 法師 / Mage`
                  }
                  if (player.data[0].classes[0].name == "ninja1") {
                    var role1 = `${assassin} 忍者 / Ninja`
                  }
                  if (player.data[0].classes[0].name == "hunter1") {
                    var role1 = `${archer}  獵人 / Hunter`
                  }
                  if (player.data[0].classes[0].name == "knight1") {
                    var role1 = `${warrior} 騎士 / Knight`
                  }
                   if (player.data[0].classes[0].name == "darkwizard1") {
                     var role1 = `${mage} 黑暗巫師 / Dark Wizard`
                  }

                  if (player.data[0].classes[0].name == "assassin2") {
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer2") {
                    var role1 = `${archer}  弓箭手 / Archer`
                  }
                  if (player.data[0].classes[0].name == "warrior2") {
                    var role1 = `${warrior} 戰士 / Warrior`
                  }
                  if (player.data[0].classes[0].name == "mage2") {
                    var role1 = `${mage} 法師 / Mage`
                  }
                  if (player.data[0].classes[0].name == "ninja2") {
                    var role1 = `${assassin} 忍者 / Ninja`
                  }
                  if (player.data[0].classes[0].name == "hunter2") {
                    var role1 = `${archer}  獵人 / Hunter`
                  }
                  if (player.data[0].classes[0].name == "knight2") {
                    var role1 = `${warrior} 騎士 / Knight`
                  }
                   if (player.data[0].classes[0].name == "darkwizard2") {
                     var role1 = `${mage} 黑暗巫師 / Dark Wizard`
                  }
                  
                  if (player.data[0].classes[0].name == "assassin3") {
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer3") {
                    var role1 = `${archer}  弓箭手 / Archer`
                  }
                  if (player.data[0].classes[0].name == "warrior3") {
                    var role1 = `${warrior} 戰士 / Warrior`
                  }
                  if (player.data[0].classes[0].name == "mage3") {
                    var role1 = `${mage} 法師 / Mage`
                  }
                  if (player.data[0].classes[0].name == "ninja3") {
                    var role1 = `${assassin} 忍者 / Ninja`
                  }
                  if (player.data[0].classes[0].name == "hunter3") {
                    var role1 = `${archer}  獵人 / Hunter`
                  }
                  if (player.data[0].classes[0].name == "knight3") {
                    var role1 = `${warrior} 騎士 / Knight`
                  }
                   if (player.data[0].classes[0].name == "darkwizard3") {
                     var role1 = `${mage} 黑暗巫師 / Dark Wizard`
                  }

                  if (player.data[0].classes[0].name == "assassin4") {
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer4") {
                    var role1 = `${archer}  弓箭手 / Archer`
                  }
                  if (player.data[0].classes[0].name == "warrior4") {
                    var role1 = `${warrior} 戰士 / Warrior`
                  }
                  if (player.data[0].classes[0].name == "mage4") {
                    var role1 = `${mage} 法師 / Mage`
                  }
                  if (player.data[0].classes[0].name == "ninja4") {
                    var role1 = `${assassin} 忍者 / Ninja`
                  }
                  if (player.data[0].classes[0].name == "hunter4") {
                    var role1 = `${archer}  獵人 / Hunter`
                  }
                  if (player.data[0].classes[0].name == "knight4") {
                    var role1 = `${warrior} 騎士 / Knight`
                  }
                   if (player.data[0].classes[0].name == "darkwizard4") {
                     var role1 = `${mage} 黑暗巫師 / Dark Wizard`
                  }

                  if (player.data[0].classes[0].name == "assassin5") {
                    var role1 = `${assassin} 刺客 / Assassin`
                  }
                  if (player.data[0].classes[0].name == "archer5") {
                    var role1 = `${archer}  弓箭手 / Archer`
                  }
                  if (player.data[0].classes[0].name == "warrior5") {
                    var role1 = `${warrior} 戰士 / Warrior`
                  }
                  if (player.data[0].classes[0].name == "mage5") {
                    var role1 = `${mage} 法師 / Mage`
                  }
                  if (player.data[0].classes[0].name == "ninja5") {
                    var role1 = `${assassin} 忍者 / Ninja`
                  }
                  if (player.data[0].classes[0].name == "hunter5") {
                    var role1 = `${archer}  獵人 / Hunter`
                  }
                  if (player.data[0].classes[0].name == "knight5") {
                    var role1 = `${warrior} 騎士 / Knight`
                  }
                   if (player.data[0].classes[0].name == "darkwizard5") {
                     var role1 = `${mage} 黑暗巫師 / Dark Wizard`
                  }
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