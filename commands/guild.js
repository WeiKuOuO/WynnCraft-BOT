const Discord = require("discord.js")
var request = require('request');

module.exports.run = async (bot, message, args) => {

        const left = bot.emojis.get("577050509316456459")
        const right = bot.emojis.get("577050517335703553")

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

                    let page = 1; 
                    let pageslength = 3;

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
                        .setFooter(`頁數 | ${page} / ${pageslength}`); 

                    let guildRole1 = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setTitle(`${guild.name} 的資訊`)
                        .addField(":bust_in_silhouette: 擁有者",`\`\`\`fix\n${tmp1}\`\`\``,true)
                        .addField(":medal: 首領",`\`\`\`fix\n${tmp2}\`\`\``,true)
                        .addField(":military_medal: 隊長",`\`\`\`fix\n${tmp3}\`\`\``,true)
                        .setFooter(`頁數 | ${page} / ${pageslength}`); 

                    let guildRole2 = new Discord.RichEmbed()
                        .setColor(0x34AB00)
                        .setTitle(`${guild.name} 的資訊`)
                        .addField(":pick: 招募者",`\`\`\`fix\n${tmp4}\`\`\``,true)
                        .addField(":video_game: 成員",`\`\`\`fix\n${tmp5}\`\`\``,true)
                        .setFooter(`頁數 | ${page} / ${pageslength}`); 

                    let pages = [
                        guildInfo, 
                        guildRole1, 
                        guildRole2, 
                    ]
                    
                    message.react('👍').then(() => message.react('👎'));

                    const filter = (reaction, user) => {
	                    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
                    };

                    message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
	                .then(collected => {
		            const reaction = collected.first();

		                if (reaction.emoji.name === '👍') {
		                	message.reply('you reacted with a thumbs up.');
		                } else {
		            	    message.reply('you reacted with a thumbs down.');
		                }
	                })
	                .catch(collected => {
	        	        message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
                	});

                    // message.channel.send(pages[page-1]).then(msg => { 
                    
                    //     msg.react(left).then( r => { 
                    //         msg.react(right) 
                          
                    //         const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                    //         const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
                          
                    //         const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
                    //         const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
                          
                           
                    //         backwards.on('collect', r => { 
                    //             if (page === 1) return; 
                    //             page--; 
                    //             pages[page-1].setFooter(`頁數 | ${page} / ${pages.length}`); 
                    //             msg.edit(pages[page-1]) 
                    //         })
                          
                    //         forwards.on('collect', r => { 
                    //             if (page === pages.length) return; 
                    //             page++; 
                    //             pages[page-1].setFooter(`頁數 | ${page} / ${pages.length}`); 
                    //             msg.edit(pages[page-1]) 
                    //         })
                        
                    //     })
                      
                    // })
                }
            })
        }  
module.exports.help = {
  name: 'guild',
};