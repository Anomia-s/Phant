import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class PingCommand extends Command {
    constructor() {
        super('ping', {
            aliases: ['ping', 'pong']
        })
    }

    public async exec(message: Message) {
        return await message.reply(`Pong! ${this.client.ws.ping}ms ✨`)
    }
}

