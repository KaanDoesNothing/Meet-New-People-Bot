const { Command } = require("klasa");
const config = require("../../config")

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            enabled: true,
            usage: "<flip:string> <amount:number>",
            description: "<heads/tails> <bet> - flips a coin with your specified bet.",
            aliases: ["cf"]
        });
    }

    run(msg, [flip, amount]) {
        amount = parseInt(amount.toString().replace("-", ""));
        if (!flip || !["heads", "tails"].includes(flip)) return msg.reply("You have to provide your flip \`coinflip <heads/tails> <bet>\`.");

        if(amount < 1) return msg.reply("You didn't bet enough, minimum amount is 1.");

        let userData = msg.author.settings;

        if (amount > userData.economy.balance) return msg.reply(`You don't have enough ${config.language.economy.currencyName}.`);

        let generatedNumber = Math.floor(Math.random() * 2) === 0;

        let text = generatedNumber ? "heads" : "tails";

        let newBalance;
        let msgContent;

        if (text !== flip) {
            newBalance = userData.economy.balance - parseInt(amount);

            msgContent = `:x: You lost, ${amount} ${config.language.economy.currencyName} have been taken from your bank account.`;
        } else {
            
            newBalance = userData.economy.balance + parseInt(amount);

            msgContent = `:white_check_mark: You Won, ${amount} ${config.language.economy.currencyName} have been added to your bank account.`;
        }

        msg.author.settings.update("economy.balance", newBalance);

        return msg.reply(msgContent);
    }
};
