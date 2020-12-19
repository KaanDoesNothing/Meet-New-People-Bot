const { KlasaClient } = require("klasa");

module.exports = KlasaClient.defaultUserSchema
    .add("economy", folder => folder
        .add("balance", "number", {default: 50}))