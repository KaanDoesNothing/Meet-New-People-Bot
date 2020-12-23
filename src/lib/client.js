const { Client } = require("klasa");

// Client.use(require("./memberGateway"));

const defaultUserSchema = require("./schemas/defaultUserSchema");

module.exports = class extends Client {
    constructor(options, defaultUserSchema) {
        super(options);
    }
}