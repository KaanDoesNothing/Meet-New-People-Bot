const express = require("express");
const session = require("express-session");
const path = require("path");
const config = require("../config");
const { authCodeLink } = require("./modules/authClient");

const app = express();

if(!config.debugging) {
    app.set("view cache", true);
}

app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "pug");

app.use("/static", express.static(path.join(__dirname + "/public")));
app.use(express.json({extended: true}));

app.use(session({
    secret: config.secret,
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.get("*", (req, res, next) => {
    res.locals.client = global.discordClient;
    
    let session = req.session.user;

    if(session) res.locals.session = {
        ...session,
        ...global.discordClient.users.cache.get(session._id)
    }
    
    next();
});

app.use("/auth", require("./routes/auth"));
app.use("/profile", require("./routes/profile"));
app.use("/dashboard", require("./routes/dashboard"));

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

    let categories = [];

    rawCommands.forEach(cmd => {
        categories.includes(cmd.category) ? "" : categories.push(cmd.category); 
    });

    if(req.query.filter) {
        newCommands = newCommands.filter(cmd => cmd.name.startsWith(req.query.filter));
    }

    res.render("commands", {commands: newCommands, categories: categories});
});

app.listen(config.server.port);