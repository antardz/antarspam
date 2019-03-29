const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("561256133755535361")
setInterval(function() {
channel.send(`ghost ghost ghost ghost ghost`);
}, 30)
})

client.login(process.env.BOT_TOKEN);