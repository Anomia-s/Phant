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

let times = 0

phant.on('message', async (message) => {
    if(parseInt(message.author.id) === 362087452145614849){
        if(times > 10) times = 0
        times++
        let percentage = Math.floor(Math.random() * times)
        if(percentage >= 8) return await message.channel.send("https://media.discordapp.net/attachments/838714928374218763/889589209537589308/image0.gif")
    }
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
