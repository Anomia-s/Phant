import { Command } from 'discord-akairo';
import { Message } from 'discord.js';

export default class CreateProfileCommand extends Command {
    constructor() {
        super('profile', {
            aliases: ['c-profile', 'create-profile', 'cpf'],
            args: [
                {
                    id: "name",
                    type: "string",
                    prompt: {
                        start: "Please specify a color",
                        retry: "Just give me a color..."
                    }
                }
            ],
            channel: "guild"
        })
    }

    public async exec(message: Message, args: any){
        await message.reply(`Let's create your profile!`)
        await message.reply(args.name)
    }
}

