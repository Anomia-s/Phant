import { Command } from 'discord-akairo';
import { Message } from 'discord.js';
const ms = require('pretty-ms');

export default class UptimeCommand extends Command {
    constructor() {
        super('uptime', {
            aliases: ['uptime', 'up']
        })
    }

    public async exec(message: Message) {
        return await message.reply(`Uptime: ${ms(this.client.uptime)}`)
    }
}
