const express = require("express");

const app = express.Router();

const { checkIfLoggedIn } = require("../modules/middlewares");

app.get("/:id", async (req, res) => {
    let user = global.discordClient.users.cache.get(req.params.id) || (await global.discordClient.users.fetch(req.params.id));

    if(!user) return res.render("error", {error: "User not found."});

    res.locals.hasPermissions = 0;

    if(res.locals.session) {
        if(user.id === res.locals.session.id) res.locals.hasPermissions = 1;
    }

    res.render("profile", {user});
});

app.get("/:id/edit", checkIfLoggedIn, async (req, res) => {
    let user = global.discordClient.users.cache.get(req.params.id) || (await global.discordClient.users.fetch(req.params.id));

    if(!user) return res.render("error", {error: "User not found."});

    if(user.id !== res.locals.session.id) return res.render("error", {user: "No permissions."});

    res.render("profile-edit", {user});
});

app.post("/update", checkIfLoggedIn, async (req, res) => {
    let user = global.discordClient.users.cache.get(req.body.id) || (await global.discordClient.users.fetch(req.body.id));

    if(!user) return res.render("error", {error: "User not found."});

    if(user.id !== req.session._id) return res.render("error", {user: "No permissions."});

    user.settings.update("profile.description", req.body.data.description);

    res.render("profile-edit", {user});
});

module.exports = app;