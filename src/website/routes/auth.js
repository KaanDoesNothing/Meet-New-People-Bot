const express = require("express");
const authClient = require("../modules/authClient");

const app = express.Router();

app.get("/callback", async (req, res) => {
    try {
        const {code} = req.query;
        const key = await authClient.getAccess(code);

        const user = await authClient.getUser(key);

        req.session.user = user;
    }catch(err) {
        res.render("error");
    }
});

app.get("/session", (req, res) => {
    return res.json(req.session.user);
});

module.exports = app;