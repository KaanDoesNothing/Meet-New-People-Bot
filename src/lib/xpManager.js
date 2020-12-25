module.exports = class {
    constructor(client) {
        this.client = client;

        this.cooldowns = new Map();
    }

    giveXP(msg) {
        console.log(1)
        // let {level} = msg.author.settings.lvl.level;

        // let randomXP = Math.floor(Math.random() * 5) + 15;

        // console.log(randomXP);
    }
}