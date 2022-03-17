import { Command } from 'discord-akairo';
import { Message, GuildMember } from 'discord.js';

export default class Ban extends Command {
    constructor() {
        super('ban', {
            aliases: ['ban'],
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
            clientPermissions: ['BAN_MEMBERS'],
            userPermissions: ['BAN_MEMBERS'],
            channel: "guild"
        })
    }

    public async exec(message: Message, args: { member: GuildMember }) {
        if (args.member.bannable) {
            const dm = await args.member.createDM(true)
            await dm.send(`You were banned from ${message.guild!.name}`)
            await message.reply(`${args.member} was banned!`);
            return await args.member.ban();
        }
        else {
            return await message.reply(`${args.member} cannot be banned.`)
        }
    }
}

