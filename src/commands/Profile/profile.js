const { Command } = require("klasa");
const config = require("../../config");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Shows your profile.",
            usage: "[user:user]"
        });
    }

    run(msg, [user = msg.author]) {
        return msg.reply(`${config.dashboardURL}/profile/${user.id}`);
    }
}