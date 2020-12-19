const { KlasaCommand } = require("klasa");

module.exports = class extends KlasaCommand {
    run() {
        return msg.reply("Working!");
    }
}