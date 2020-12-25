const { Monitor } = require("klasa");
// const xpManager = require("../lib/xpManager");

module.exports = class extends Monitor {
    constructor(...args) {
        super(...args, {
            enabled: true,
            ignoreBots: true,
            ignoreSelf: true,
            ignoreOther: false
        });

        // this.xpManager = new xpManager(this.client);
    }

    async run(msg) {
        console.log(1)
        // console.log(msg.author.id);
        // console.log(this.xpManager.giveXP(msg));
    }
}