const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
<<<<<<< HEAD
    const userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.82 Safari/537.36";
    const playerName = args.join(" ");
    const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
    request({
        url: urlMain,
        json: true,
        headers: {
            'User-Agent': userAgent
        }
    }, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            const username = body.data[0].username;
            console.log(username);
            console.log(urlMain)
        } else {
            console.log(error);
            return message.channel.send('在查詢時出了點問題:P');
        }
    });
}  
=======
  
        const playerName = args.join(" ");
        const urlMain = `https://api.wynncraft.com/v2/player/${playerName}/stats`
            request(urlMain, function(err, response, player) {
                if(err) {
                    console.log(err);
                    return message.channel.send('在查詢時出了點問題:P');
                }
                player = JSON.parse(player);
                console.log(player.data[0['username']])
                console.log(urlMain)
                console.log(player.data[0].username)
                console.log(player.data.username)
            })
        }  
>>>>>>> parent of 5e4126b... Update player.js
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")

module.exports.help = {
  name: 'guild',
};
