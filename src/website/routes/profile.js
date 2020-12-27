const express = require("express");

const app = express.Router();

const { checkIfLoggedIn } = require("../modules/middlewares");

app.get("/:id", async (req, res) => {
    let user = global.discordClient.users.cache.get(req.params.id) || (await global.discordClient.users.fetch(req.params.id));

    if(!user) return res.render("error", {error: "User not found."});

    res.render("profile", {user});
});

app.get("/:id/edit", checkIfLoggedIn, async (req, res) => {
    let user = global.discordClient.users.cache.get(req.params.id) || (await global.discordClient.users.fetch(req.params.id));

    if(!user) return res.render("error", {error: "User not found."});

    if(user.id !== res.locals.session.id) return res.render("error", {user: "No permissions."});

    res.render("profile-edit", {user});
});

module.exports = app;