const Discord = require("discord.js");

const Client = new Discord.Client;

Client.on("ready", () => {
    console.log("bot on");
})


Client.login(process.env.TOKEN);