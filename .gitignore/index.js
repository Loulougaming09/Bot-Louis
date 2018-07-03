const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setActivity("Command: *help");
    console.log("Connectedç")
});

bot.login("NDYyMzA5Njk5MDkwNTEzOTMw.DhjakQ.oi1H0Ltpo3Vmb3a5-_KH9qz6k1M");


bot.on('message', message => {
    if (message.content === prefix + "help"){
        message.channel.send("Liste des commandes : -help ");
    }

    if (message.content === "Salut"){
        message.reply("Bien le bonjour :)");
        console.log("Commande Salut effectuée");
    }
    
}})

