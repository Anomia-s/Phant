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
            try {
                const dm = await args.member.createDM(true)
                await dm.send(`You were kicked from ${message.guild!.name} for ${message.content.split("\"")[1]}`)
            } catch (err) {
                await message.channel.send(`Small issue sending the member a message. Still kicking.`)
            }
            await message.reply(`${args.member.user.username} was kicked for ${message.content.split("\"")[1]}!`);
            return await args.member.kick(message.content.split("\"")[1]);
        }
        else {
            return await message.reply("Cannot kick member.")
        }
    }
}

