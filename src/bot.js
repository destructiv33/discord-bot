const { Client, Intents } = require("discord.js");
const { truckByComand } = require('./layout/truck.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(truckByComand('t600'))
});

client.on("messageCreate", (msg) => {
  if (msg.content.startsWith(">")) {
    if (msg.content.substring(1) === "mascota") {
      msg.reply("JOSELITO ES LA MASCOTA");
    }
  }
});

client.login("OTA4MjE4NDI5NjU0MzA2ODI2.YYyiUw.y1Vr7MU2Lokkn2bnGHsfxZh6zuk");
