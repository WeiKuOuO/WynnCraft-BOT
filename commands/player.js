const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
        const playerName = args.join(" ");
        const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`;
            request(urlMain, function(err, response, player) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                } 
                player = JSON.parse(player);
                console.log(player.data)
                console.log(player.message)
                if(!player.data){
                    message.channel.send("你輸入了錯誤的玩家名稱,請重新確認是否有打錯ID")
                }else{
                    let playerInfo = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setTitle(`${player} 的資訊`)
                    message.channel.send(playerInfo)
                }
            })
        }  

module.exports.help = {
  name: 'player',
};