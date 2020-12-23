const { Command } = require("klasa");
const config = require("../../config")

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            description: "Shows your balance.",
            usage: "[user:user]"
        });
    }

    run(msg, [user = msg.author]) {
        const balance = user.settings.economy.balance;
        
        user.id === msg.author.id ? msg.reply(`You have ${balance} ${config.language.economy.currencyName}`) : msg.channel.send(`${user.tag} has ${balance} ${config.language.economy.currencyName}`);
    }
};
