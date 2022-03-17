import PhantClient from "./bot/client/PhantClient";

const phant = new PhantClient();
console.log(`Initiating Phant...`)
const initiation = Date.now()
phant
    .on('error', (err) => console.error(`[CLIENT ERROR] ${err.message}`, err.stack))
    .on('shardError', (err, id) => console.error(`[SHARD ${id} ERROR] ${err.message}`, err.stack))
    .on('warn', (warn) => console.warn(`[CLIENT WARN] ${warn}`));

phant.on('guildCreate', (guild) => {
    guild.systemChannel!.send("Thanks for using Phant! Soon you'll be able to use the shop :-)")
})

phant.on('ready', async () => {
    console.log(`Phant has been initiated.`)
    console.log(`Took ${Date.now() - initiation}ms to load.`)
    await phant.user!.setActivity({
        name: "Listening to your command.",
    })
    console.log(`Status: ${phant.ws.status}`)
})

phant.start()



