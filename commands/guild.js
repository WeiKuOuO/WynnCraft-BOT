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
    
        
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")

module.exports.help = {
  name: 'guild',
};