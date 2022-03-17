import { Command } from 'discord-akairo';
import { Message, GuildMember } from 'discord.js';

export default class Ban extends Command {
    constructor() {
        super('kick', {
            aliases: ['kick'],
            args: [
                {
                    id: "member",
                    type: "member",

                    prompt: {
                        start: "Please specify a member.",
                        retry: "A MEMBER not anything else... please.."
                    }
                }
            ],
            clientPermissions: ['KICK_MEMBERS'],
            userPermissions: ['KICK_MEMBERS'],
            channel: "guild"
        })
    }

    public async exec(message: Message, args: { member: GuildMember }) {
        if (args.member.kickable) {
            const dm = await args.member.createDM(true)
            await dm.send(`You were kicked from ${message.guild!.name}`)
            await message.reply(`${args.member.user.username} was kicked!`);
            return await args.member.kick();
        }
        else {
            return await message.reply("Cannot kick member.")
        }
    }
}

