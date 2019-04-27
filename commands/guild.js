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
                        .setThumbnail(`https://mysterious-ridge-74146.herokuapp.com/images/${guild.name}.png`)
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


                    /////////////////////

                    const options = {
                        limit: 15 * 1000,
                        min: 1,
                        max: 2, // there will be 2 pages
                        page: 1
                    }

                    const m = await msg.channel.send({ embed: pages[options.page] });

                    await m.react('⬅');
                    await m.react('➡');
                    await m.react('🗑');

                    const pages = {
                        1: { title: ':one:', description: 'This is page one!' }, 
                        2: { title: ':two:', description: 'This is page two!' }
                    }

                    const filter = (reaction, user) => {
                        return ['⬅', '➡', '🗑'].includes(reaction.emoji.name) && user.id == msg.author.id;
                    };
                    
                    awaitReactions(msg, m, options, filter);

                    const awaitReactions = async (msg, m, options, filter) => {
                        const { min, max, page, limit } = options;
                        
                        m.awaitReactions(filter, { max: 1, time: limit, errors: ['time'] })
                        .then(async (collected) => {
                        }).catch(() => {});
                    }

                    const reaction = collected.first();


                    if (reaction.emoji.name === '⬅') {
                      // a.       
                    }
                    else if (reaction.emoji.name === '➡') {
                      // b.
                    }
                    else if (reaction.emoji.name === '🗑') {
                          // c.
                    }
                    else {
                      // d.
                    }
                    const removeReaction = async (m, msg, emoji) => {
                        try { m.reactions.find(r => r.emoji.name == emoji).users.remove(msg.author.id); } catch(err) {}
                    }

                    if (reaction.emoji.name === '⬅') {
                        // remove the back reaction if possible
                        await removeReaction(m, msg, '⬅');
                        
                        // check if the page can go back one
                        if (page != min) {
                            // change the page
                            page = page - 1;
                            await m.edit({ embed: pages[page] });
                        }
                       
                        // restart the listener 
                        awaitReactions(msg, m, options, filter);
                    }

                    else if (reaction.emoji.name === '➡') {
                        // remove the back reaction if possible
                        await removeReaction(m, msg, '➡');
                        
                        // check if the page can go forward one
                        if (page != max) {
                            // change the page
                            page = page + 1;
                            await m.edit({ embed: pages[page] });
                        }
                       
                        // restart the listener 
                        awaitReactions(msg, m, options, filter);
                    }

                    else if (reaction.emoji.name === '🗑') {
                        // trash the message instantly, returning so the listener fully stops
                        return await m.delete();
                    }

                    else {
                        awaitReactions(msg, m, options, filter);
                    };
                    /////////////////////////
                }
            })
        }  
module.exports.help = {
  name: 'guild',
};