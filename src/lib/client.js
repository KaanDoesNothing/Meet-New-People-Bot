const { Client } = require("klasa");

const defaultUserSchema = require("./schemas/defaultUserSchema");

module.exports = class extends Client {
    constructor(options, defaultUserSchema) {
        super(options);
    }
}