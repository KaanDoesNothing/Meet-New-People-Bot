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
        },
        script: (ctx) => {
            return `<script src="${ctx}"></script>`;
        },
        style: (ctx) => {
            return `<link rel="stylesheet" type="text/css" href="${ctx}" defer>`;
        }
    }
});

app.engine("handlebars", hbsConfig.engine);
app.set("views", path.join(__dirname + "/views"))
app.set("view engine", "handlebars");

app.use("/static", express.static(path.join(__dirname + "/public")));

app.get("*", (req, res, next) => {
    res.locals.client = global.discordClient;

    next();
});

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/commands", (req, res) => {
    const rawCommands = global.discordClient.commands.filter(cmd => cmd.permissionLevel !== 10);

    let newCommands = rawCommands.map(cmd => ({
        name: cmd.name,
        category: cmd.category,
        usage: cmd.usage && cmd.usage.length > 0 ? cmd.usage : "None"
    }));

    res.render("commands", {commands: newCommands});
});

app.listen(5010);