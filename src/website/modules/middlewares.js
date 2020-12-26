const authClient = require("../modules/authClient");

const cachedGuildResults = new Map();

module.exports.checkIfLoggedIn = (req, res, next) => {
    if(!req.session.user) {
        return res.render("error", {error: "You must be logged in."});
    }

    next();
}

module.exports.prepareGuilds = async (req, res, next) => {
    // let finalGuilds = [];

    // for (const id of global.discordClient.guilds.cache.keys()) {
    //     const guild = global.discordClient.guilds.cache.get(id);

    //     const member = guild.members.cache.get(res.locals.session._id);

    //     if(member) {
    //         const hasPermission = member.hasPermission("MANAGE_GUILD");
    //         console.log(hasPermission)
    //         if(hasPermission) finalGuilds.push(guild);
    //     }
    // }
    const guilds = cachedGuildResults.get(res.locals.session._id) || (await authClient.getGuilds(req.session.key));
    cachedGuildResults.set(res.locals.session._id, guilds);
    const finalGuilds = [];

    for(const id of guilds.keys()) {
        const hasPermissions = guilds.get(id).permissions.includes("MANAGE_GUILD");

        if(hasPermissions) {
            const fetchedGuild = global.discordClient.guilds.cache.get(id);
            if(fetchedGuild) finalGuilds.push(fetchedGuild);
        }
    }

    res.locals.guilds = finalGuilds;

    next();
}