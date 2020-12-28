const { Command } = require("klasa");
const config = require("../../config");
const canvas = require("canvas-constructor");

module.exports = class extends Command {
    constructor(...args) {
        super(...args, {
            description: "Shows your profile.",
            usage: "[user:user]"
        });
    }

    run(msg, [user = msg.author]) {
    }
}