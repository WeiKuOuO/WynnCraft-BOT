const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  
        // const guildName = args.join(" ");
        // const urlMain = "https://api.wynncraft.com/public_api.php?action=guildStats&command=" + (guildName);
        // request(urlMain, function(err, response, guild) {
        //     if(err) {
        //         console.log(err);
        //         return message.channel.send('在查詢時出了點問題:P');
        //     }
        //     guild = JSON.parse(guild);
        //     if(guild.error){
        //         message.channel.send("你輸入了錯誤的工會名稱,可能是大小寫錯誤了")
        //     }else{
        //         let guildInfo = new Discord.RichEmbed()
        //             .setColor("RANDOM")
        //             .setTitle(`${guild.name} 的資訊`)
        //         message.channel.send(guildInfo)
        //     }

        // })

        const ip = args.join(" ");
    const text = "**★  " + (ip) + "** 的狀態";
    const urlTitle = "**IP** - " + (ip);
    const urlMain = "https://mcapi.us/server/status?ip=" + (ip);
    const url = "https://mcapi.us/server/image?ip=" + (ip);
    request(urlMain, function(err, response, body) {
        if(err) {
            console.log(err);
            return message.channel.send('在查詢時出了點問題:P (IP錯誤)...');
        }
        body = JSON.parse(body);
        var status = '**伺服器**現在是**關閉**的!';
        var member = "關閉";
        if(body.online) {
            status = '**伺服器**現在是**開啟**的!  -  ';
            if(body.players.now) {
                member = "**" + body.players.now + "** / **" + body.players.max + "**";
                status += '**' + body.players.now + '** 人正在遊玩!!';
            } else {
                member = "**0** / **" + body.players.max + "**";
                status += '**沒人在玩喔! 快進去搶頭香吧!**';
            }
        }
        message.channel.send({embed:{
          title: (text),
          description: (status),
          fields: [
            {
              name: "• 核心",
              value: body.server.name,
              inline: true
            },
            {
              name: "• 人數",
              value: (member),
              inline: true
            },
            {
              name: "• 運行時間",
              value: moment.duration(body.duration).format(" D [天], H [時], m [分], s [秒]"),
              inline: true
            }
          ],
          image:{
            url: (url),
          },
          color: 0x0080ff
        }});
    });
    message.delete().catch(O_o=>{});
    }
    //玩家資訊
    if(command === "user"){
    message.delete().catch(O_o=>{});
    const id = args.join(" ");
    const uuid = await mcapi.usernameToUUID(id);
    const url1 = "https://visage.surgeplay.com/face/400/" + (uuid)
    const url2 = "https://visage.surgeplay.com/head/400/" + (uuid)
    const url3 = "https://visage.surgeplay.com/full/400/" + (uuid)
    const url4 = "https://visage.surgeplay.com/frontfull/400/" + (uuid)
    if(!id)
      return message.channel.send("請輸入玩家名稱，不可空白");
    if(uuid === undefined)
      return message.channel.send("查無此玩家資訊，請確認玩家是否存在");
    message.channel.send({embed: {
      title: "玩家資訊",
      description: "這裡可以讓你知道**玩家**的資訊\n此系統**正在開發中**，有問題請見諒",
      color: 3447003,
      author: {
        name: (id) + "的資訊",
        icon_url: (url1)
      },
      fields: [{
          name: "• 名稱",
          value: (id),
          inline: true
        },
        {
          name: "• UUID",
          value: (uuid),
          inline: true
        },
        {
          name: "• Skin",
          value: "此玩家的Skin",
          inline: true
        },
      ],
      image :{
        url: (url3)
      },
      thumbnail :{
        url: (url2)
      },
      timestamp: new Date(),
      footer: {
        icon_url: bot.user.avatarURL,
        text: bot.user.username
      }
    }})
        
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")
}

module.exports.help = {
  name: 'guild',
};