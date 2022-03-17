import { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } from 'discord-akairo';
import { join } from 'path';
import { config } from 'dotenv'
import { Intents } from 'discord.js';
config()
export default class PhantClient extends AkairoClient {
    public commandHandler = new CommandHandler(this, {
        directory: join(__dirname, '..', 'commands'),
        prefix: '!',
        aliasReplacement: /-/g,
        allowMention: true,
        handleEdits: true,
        commandUtil: true,
        commandUtilLifetime: 3e5,
        defaultCooldown: 3000,
        argumentDefaults: {
            prompt: {
                modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command.`,
                modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command.`,
                timeout: 'Guess you took too long, the command has been cancelled.',
                ended: "More than 3 tries and you still didn't quite get it... The command has been cancelled.",
                cancel: 'The command has been cancelled.',
                retries: 3,
                time: 30000,
            },
            otherwise: '',
        },
    });
    public inhibitorHandler = new InhibitorHandler(this, { directory: join(__dirname, '..', 'inhibitors') });

    public listenerHandler = new ListenerHandler(this, { directory: join(__dirname, '..', 'listeners') });
    constructor() {
        // @ts-ignore
        super({ ownerID: process.env.OWNER },
            {
                disableMentions: 'all',
                shards: 'auto',
            })
        process.on('unhandledRejection', (err: any) =>
            console.error(`[UNHANDLED REJECTION] ${err.message}`, err.stack),
        );

    }
    public async _init() {
        this.commandHandler.loadAll();
        this.inhibitorHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    public async start() {
        await this._init()

        return await this.login(process.env.TOKEN)
    }
}