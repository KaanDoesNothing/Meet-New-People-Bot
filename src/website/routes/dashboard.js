const express = require("express");

const authClient = require("../modules/authClient");

const { checkIfLoggedIn, prepareGuilds } = require("../modules/middlewares");

const app = express.Router();

app.get("/", checkIfLoggedIn, prepareGuilds, async (req, res) => {
    res.render("dashboard");
});

app.get("/:id", checkIfLoggedIn, prepareGuilds, async (req, res) => {
    res.render("dashboard-server", {guild: global.discordClient.guilds.cache.get(req.params.id)});
})

module.exports = app;