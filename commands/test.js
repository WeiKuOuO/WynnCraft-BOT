const Discord = require("discord.js")

module.exports.run = async (bot, msg, args) => {
  //   const embed = new Discord.RichEmbed()
  //           .setTitle("test")
  //           .setFooter(msg.author.username, msg.author.avatarURL)
  //           .setColor("RANDOM")
  //   const reactmsg = await msg.channel.send(embed).catch(e => {})
  //   await reactmsg.react('🆕')
  //   const filter = (reaction, user) => reaction.emoji.name === '🆕' && msg.author.id == user.id
	// const collector = reactmsg.createReactionCollector(filter, {time: 600000});
	// collector.on('collect', async reaction => {
  //       const user = reaction.users.last()
  //       reaction.remove(user)
  //       const embed = new Discord.RichEmbed()
  //           .setTitle("test")
  //           .setFooter(user.username, user.avatarURL)
  //           .setColor("RANDOM")
  //       await reactmsg.edit(embed)
  //   })
  //   collector.on('end', collected => {
  //       reactmsg.clearReactions()
  //   })
}

module.exports.config = {
    command: "test",
}