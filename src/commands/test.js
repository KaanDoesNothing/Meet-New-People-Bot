const { Command } = require("klasa");

module.exports = class extends Command {
    run(msg) {
        return msg.reply("Working!");
    }
}