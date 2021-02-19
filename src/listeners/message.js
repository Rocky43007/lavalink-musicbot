global.prefixes = new Keyv("sqlite://../prefixes.sqlite");
global.users = new Keyv("sqlite://../users.sqlite");
const Discord = require("discord.js");
module.exports = {
  name: "message",
  exec: async (client, message) => {
    if (message.author.bot) return;
    if (!message.guild) return;
    var prefix = await global.prefixes.get(message.guild.id);
    if (prefix === undefined) prefix = client.prefix;
    if (message.content.startsWith(prefix)) {
      const args = message.content.slice(prefix.length).trim().split(/ +/g);
      const commandName = args.shift().toLowerCase();
      const command = args.shift().toLowerCase();
      const command =
        client.commands.get(commandName) ||
        client.commands.find(
          (c) => c.aliases && c.aliases.includes(commandName)
        );
      if (command) {
        try {
          const check = global.users.get(message.guild.id);
          if (check === undefined || false) {
            const error = new Discord.MessageEmbed()
              .setColor("#ff1900")
              .setDescription(
                `:x: You do no have access to this bot! Donate to Rockibot in the support server if you want to access this bot!`
              );
            message.channel.send(error);
          } else {
            await command.exec(msg, args);
          }
        } catch (e) {
          console.error(e);
          message.reply("There was an error trying to execute that command!");
        }
      }
    }
  },
};
