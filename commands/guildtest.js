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
                    var guildimages = (function() {
                        loadGuildModal()
                    })
                    function loadGuildModal(t) {
                        $("#guildModal").modal({
                            show: !0
                        }), guild + t, function(t) {
                            if (t.hasOwnProperty("banner")) {
                                $(".guildInformationContainer").addClass("col-xs-6");
                                for (var e = {
                                        image: ["url('https://wynncraft.com/img/banners/bg_base.png')"],
                                        repeat: ["no-repeat"],
                                        position: ["0 0"]
                                    }, a = t.banner.layers.length - 1; a >= 0; a--) e.image.push("url('https://wynncraft.com/img/banners/" + t.banner.layers[a].colour.toLowerCase() + ".png')"), e.repeat.push("no-repeat"), e.position.push(banner_positions[t.banner.layers[a].pattern]);
                                e.image.push("url('https://wynncraft.com/img/banners/" + t.banner.base.toLowerCase() + ".png')"), e.repeat.push("no-repeat"), e.position.push(banner_positions.BASE), $("#banner").css("background-image", e.image.join(",")), $("#banner").css("background-repeat", e.repeat.join(",")), $("#banner").css("background-position", e.position.join(","))
                            } else $(".bannerRenderContainer").hide(), $(".guildInformationContainer").removeClass("col-xs-6");
                        }
                    }
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
                        .setImage(guildimages)
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
                    

                    const reactionControls = {
                        NEXT_PAGE: '▶',
                        PREV_PAGE: '◀'
                    }
                    
                    const collector = new Discord.ReactionCollector(message, (reaction, user) => Object.values(reactionControls).includes(reaction.emoji.name), {
                        time: 60000, // stop automatically after one minute 
                    });
                        

                    message.channel.send(pages[page-1]).then(msg => { 

                        msg.react("▶").then( r => { 
                            msg.react("◀") 
                          

                        collector.on('collect', (reaction, user) => {
                            switch (reaction.emoji.name) {
                                case emojis.NEXT_PAGE: {
                                    if (page === 1) return; 
                                    page--; 
                                    pages[page-1].setFooter(`頁數 | ${page} / ${pages.length}`); 
                                    msg.edit(pages[page-1])
                                    message.clearReactions();
                                    break;
                                }
                                case emojis.PREV_PAGE: {
                                    if (page === pages.length) return; 
                                    page++; 
                                    pages[page-1].setFooter(`頁數 | ${page} / ${pages.length}`); 
                                    msg.edit(pages[page-1]) 
                                    message.clearReactions();
                                    break;
                                }
                            }     
                        });
                        })
                    });
                

                    
                    
                    // message.channel.send(pages[page-1]).then(msg => { 
                    
                    //     msg.react(left).then( r => { 
                    //         msg.react(right) 
                          
                    //         const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
                    //         const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id; 
                          
                    //         const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
                    //         const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 }); 
                          
                           
                    //         backwards.on('collect', r => { 
                                // if (page === 1) return; 
                                // page--; 
                                // pages[page-1].setFooter(`頁數 | ${page} / ${pages.length}`); 
                                // msg.edit(pages[page-1]) 
                    //         })
                          
                    //          forwards.on('collect', r => { 
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