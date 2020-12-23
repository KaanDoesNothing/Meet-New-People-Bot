const { Command } = require("klasa");
const nekoClient = require("../../lib/nekoClient");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            usage: "<user:user>"
        });
    }

    async run(msg, [user]) {
        return msg.sendEmbed(msg.language.get("EMBED_ROLEPLAY", msg.author.username, user.username, "tickled", (await nekoClient.sfw.tickle()).url));
    }
};