const express = require("express");
const hbs = require("express-handlebars");
const path = require("path");

const app = express();

const hbsConfig = hbs.create({
    extname: "handlebars",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname + "/views/layouts"),
    helpers: {
        json: (ctx) => {
            return JSON.stringify(ctx);
        }
    }
});

app.engine("handlebars", hbsConfig.engine);
app.set("views", path.join(__dirname + "/views"))
app.set("view engine", "handlebars");

app.get("*", (req, res, next) => {
    res.locals.client = global.discordClient;

    next();
});

app.get("/", (req, res) => {
    res.render("home");
});

app.listen(5010);