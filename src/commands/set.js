module.exports = {
  name: "set",
  exec: async (msg) => {
    if (msg.author.id !== process.env.OWNER_ID) return;
    global.users.set(msg.guild.id, true);
    msg.reply("This server now has access to Rockibot Music 1!");
  },
};
