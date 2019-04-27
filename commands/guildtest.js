const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {
  
        const guildName = args.join("");
        const urlMain = "https://api.wynncraft.com/public_api.php?action=guildStats&command=" + (guildName);

        if(guildName == ""){
            message.channel.send("你並沒有輸入公會名稱")
            return
        } 
        request(urlMain, function(err, response, guild) {
            const url = 'https://wynncraft.com/stats/guild/' + (guildName);
            request(url, (err, res, body) => {
            console.log(body)
        })
    });
        const cheerio = require('cheerio')
        // 把 body 放進 cheerio 準備分析
        const $ = cheerio.load(body)
        let weathers = []
        $('#guildModal .bannerRender #banner').each(function(i, elem) {
            weathers.push($(this).text().split('\n'))
        })

        request(urlMain, function(err, response, guild) {
            if(err) {
                console.log(err);
                return message.channel.send('在查詢時出了點問題:P');
                }
                guild = JSON.parse(guild);
                if(guild.error){
                    message.channel.send("你輸入了錯誤的公會名稱,可能是大小寫錯誤了")
                }else{
                    let tmp1;
                    let tmp2;
                    let tmp3;
                    let tmp4;
                    let tmp5;
                    guild.members.forEach(function(member) {
                        if (member.rank === "OWNER") {
                            if (tmp1 == null) {
                                tmp1 = member.name;
                            } else {
                                tmp1 = tmp1 + "\n" + member.name;
                            }
                        }
                        if (member.rank === "CHIEF") {
                            if (tmp2 == null) {
                                tmp2 = member.name;
                            } else {
                                tmp2 = tmp2 + "\n" + member.name;
                            }
                        }
                        if (member.rank === "CAPTAIN") {
                            if (tmp3 == null) {
                                tmp3 = member.name;
                            } else {
                                tmp3 = tmp3 + "\n" + member.name;
                            }
                        }
                        if (member.rank === "RECRUITER") {
                            if (tmp4 == null) {
                                tmp4 = member.name;
                            } else {
                                tmp4 = tmp4 + "\n" + member.name;
                            }
                        }
                        if (member.rank === "RECRUIT") {
                            if (tmp5 == null) {
                                tmp5 = member.name;
                            } else {
                                tmp5 = tmp5 + "\n" + member.name;
                            }
                        }
                    });
                    let guildInfo = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setTitle(`${guild.name} 的資訊`)
                        .addField(":pager:  工會名稱",`\`\`\`css\n${guild.name}\`\`\``,true)
                        .addField(":mega: 公會前綴",`\`\`\`md\n#${guild.prefix}\`\`\``,true)
                        .addField(":evergreen_tree: 公會等級",`\`\`\`diff\n+    Level${guild.level}   +\`\`\``,true)
                        .addField(":earth_asia: 領地數量",`\`\`\`xl\n${guild.territories}\`\`\``,true)
                        .addField(":calendar_spiral: 創建日期",`\`\`\`xl\n${guild.createdFriendly}\`\`\``,true)
                        .addField(":seedling: 經驗值",`\`\`\`diff\n-    ${guild.xp}%    -\`\`\``,true)
                        .addField(":bust_in_silhouette: 擁有者",`\`\`\`fix\n${tmp1}\`\`\``,true)
                        .addField(":medal: 首領",`\`\`\`fix\n${tmp2}\`\`\``,true)
                        .addField(":military_medal: 隊長",`\`\`\`fix\n${tmp3}\`\`\``,true)
                        .addField(":pick: 招募者",`\`\`\`fix\n${tmp4}\`\`\``,true)
                        .addField(":video_game: 成員",`\`\`\`fix\n${tmp5}\`\`\``,true)
                    message.channel.send(guildInfo)
                }
            })
        }  
//moment.duration(guild.duration).format(" D [天], H [時], m [分], s [秒]")

module.exports.help = {
  name: 'guild',
};