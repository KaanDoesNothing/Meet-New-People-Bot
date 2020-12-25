const { KlasaClient } = require("klasa");

module.exports = KlasaClient.defaultUserSchema
    .add("economy", folder => folder
        .add("balance", "number", {default: 50}))
    .add("lvl", folder => folder
        .add("level", "number", {default: 1})
        .add("required_xp", "number", {default: 50})
        .add("prev_xp", "number", {default: 1}))