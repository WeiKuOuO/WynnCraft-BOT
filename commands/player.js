const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {

  const assassin = bot.emojis.get("577051297027457036");
  const warrior = bot.emojis.get("577054598062276619");
  const archer = bot.emojis.get("577054598238306314");
  const mage = bot.emojis.get("577055020168511488");

  const mining = bot.emojis.get("577882452287029248");
  const woodcutting = bot.emojis.get("577883376456040489");
  const fishing = bot.emojis.get("578235365652037633");
  const farming = bot.emojis.get("578235327127355420");

  const alchemism = bot.emojis.get("57823915557899468");
  const armouring = bot.emojis.get("578242781450076160");
  const cooking = bot.emojis.get("578242781458333696");
  const jeweling = bot.emojis.get("578242781441425422");
  const scribing = bot.emojis.get("578242781408002058");
  const tailoring = bot.emojis.get("578242781378510862");
  const weaponsmithing = bot.emojis.get("578242781399744522");
  const woodworking = bot.emojis.get("578242781470785556");

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
                  ]
                  
                  let playerInfo = new Discord.RichEmbed()
                  .setTitle(`${player.data[0].username} 的玩家資訊`)
                  .addField(`:bust_in_silhouette: 綜合資訊 / All`, 
                  `
                  玩家階級 / Rank | **${player.data[0].rank}**
                  公會 / Guild | **${player.data[0].guild.name}** - **${player.data[0].guild.rank}**
                  翻箱數 / Chests Found | **${player.data[0].global.chestsFound}**
                  走路格數 / Blocks Walked | **${player.data[0].global.blocksWalked}格**
                  物品鑑定 / Items Identified | **${player.data[0].global.itemsIdentified}**
                  生物擊殺數 / Mobs Killed | **${player.data[0].global.mobsKilled}**
                  PVP / KD | **${player.data[0].global.pvp.kills}** / **${player.data[0].global.pvp.deaths}**
                  登入次數 / Logins | **${player.data[0].global.logins}**
                  死亡次數 / Deaths | **${player.data[0].global.deaths}**
                  `
                  , true)
                  .addField(`${role1} 的角色資訊`, 
                  `
                  :crossed_swords: 戰鬥 / Combat | [**${xp0[0].level}** - **${xp0[0].xp}%**]
                  ${woodcutting} 伐木 / Wood Cutting | [**${xp0[1].level}** - **${xp0[1].xp}%**]
                  ${mining} 挖礦 / Mining | [**${xp0[2].level}** - **${xp0[2].xp}%**]
                  ${fishing} 釣魚 / Fishing | [**${xp0[3].level}** - **${xp0[3].xp}%**]
                  ${farming} 農業 / Farming | [**${xp0[4].level}** - **${xp0[4].xp}%**]

                  ${alchemism} 藥水 / Alchemism | [**${xp0[5].level}** - **${xp0[5].xp}%**]
                  ${armouring} 裝備 / Armouring | [**${xp0[6].level}** - **${xp0[6].xp}%**]
                  ${cooking} 烹飪 / Cooking | [**${xp0[7].level}** - **${xp0[7].xp}%**]
                  ${jeweling} 飾品 / Jeweling | [**${xp0[8].level}** - **${xp0[8].xp}%**]
                  ${scribing} 卷軸 / Scribing | [**${xp0[9].level}** - **${xp0[9].xp}%**]
                  ${tailoring} 紡織 / Tailoring | [**${xp0[10].level}** - **${xp0[10].xp}%**]
                  ${weaponsmithing} 製劍 / Weaponsmithing | [**${xp0[11].level}** - **${xp0[11].xp}%**]
                  ${woodworking} 木工 / Woodworking | [**${xp0[12].level}** - **${xp0[12].xp}%**]
                  `
                  , true) 

                  
                  message.channel.send(playerInfo);
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

//                     const xp = [
//                       xp0
//                     ]

//                     var role1 = ":dagger: 刺客 / Assassin"

//                     essage.channel.send(playerInfo)
//                   }


module.exports.help = {
  name: 'player',
};