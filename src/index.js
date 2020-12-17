const Client = require("./lib/client");

const config = require("./config");

const client = new Client({
    prefix: ".."
}).login(config.token);

module.exports = client;