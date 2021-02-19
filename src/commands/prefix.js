const Discord = require("discord.js");
const c = require("chalk");
module.exports = {
  name: "prefix",
  description: "Change the prefix of the bot!",
  async execute(message, args) {
    const Usrerror = new Discord.MessageEmbed()
      .setColor("#ff1900")
      .setDescription(
        ":x: You don't have permission to change the server prefix! You need the `ADMINISTRATOR` permission to change the prefix!"
      );
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.channel.send(Usrerror);

    const reset = new Discord.MessageEmbed()
      .setColor("#00ff2a")
      .setDescription(
        `:white_check_mark: Set prefix back to \`${client.prefix}\``
      );
    if (args[0] === "reset") {
      await global.prefixes
        .set(message.guild.id, client.prefix)
        .then(
          message.guild.members.cache
            .get("798180182020194324")
            .setNickname(`Rockibot Music 1`),
          message.channel.send(reset)
        );
    } else if (args[0] === "default") {
      await prefixes
        .set(message.guild.id, client.prefix)
        .then(
          message.guild.members.cache
            .get("798180182020194324")
            .setNickname(`Rockibot Music 1`),
          message.channel.send(reset)
        );
    } else if (args[0] === undefined) {
      const exists = await global.prefixes.get(message.guild.id);
      if (exists === undefined) {
        const prefix = new Discord.MessageEmbed()
          .setColor("#00FFFF")
          .setDescription(
            `:information_source: Prefix is \`${client.prefix}\``
          );
        message.channel.send(prefix);
      } else {
        const prefix = new Discord.MessageEmbed()
          .setColor("#00FFFF")
          .setDescription(`:information_source: Prefix is \`${exists}\``);
        message.channel.send(prefix);
      }
    } else {
      if (args[0].length >= 4) {
        const error = new Discord.MessageEmbed()
          .setColor("#ff1900")
          .setDescription(":x: Please use less than 4 characters!");
        message.channel.send(error);
      } else {
        const prefix = new Discord.MessageEmbed()
          .setColor("#00ff2a")
          .setDescription(
            `:white_check_mark: Set prefix back to \`${args[0]}\`\n:information_source: The bot's nickname has changed to reflect this, you can modify the nickname if you wish.`
          );
        await global.prefixes
          .set(message.guild.id, args[0])
          .then(
            message.guild.members.cache
              .get("798180182020194324")
              .setNickname(`[${args[0]}] Rockibot Music 1`),
            message.channel.send(prefix)
          );
      }
    }
  },
};
