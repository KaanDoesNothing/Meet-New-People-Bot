const Client = require("./lib/client");

const config = require("./config");

const client = new Client({
    prefix: "..",
    fetchAllMembers: false
}).login(config.token);

require("./website/server");