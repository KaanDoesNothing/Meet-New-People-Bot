const { Event } = require("klasa");

module.exports = class extends Event {

    run(...params) {
        global.discordClient = this.client;   
    }
};