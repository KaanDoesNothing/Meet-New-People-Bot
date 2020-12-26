const Client = require("./lib/client");

const config = require("./config");

const client = new Client({
    prefix: "..",
    fetchAllMembers: false
}).login(config.token);

// module.exports = client.then(res => res.);

require("./website/server");