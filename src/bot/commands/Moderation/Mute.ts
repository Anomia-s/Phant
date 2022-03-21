import { Command } from 'discord-akairo';
import { Message, GuildMember } from 'discord.js';

export default class Ban extends Command {
    constructor() {
        super('mute', {
            aliases: ['mute'],
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
        /*
        const guildID = message.guild.id
        const guild = this.client.guilds!.cache.get(guildID)

        let muteRole = guild.roles!.cache!.find(m => m.name === "Muted");
        if (!muteRole) {
            muteRole = await guild.roles.create({
                data: {
                    name: "Muted",
                }
            })

            message.guild.channels!.cache!.forEach(async (channel, id) => {
                await channel.createOverwrite(muteRole, {
                    SEND_MESSAGES: false,
                    MANAGE_MESSAGES: false,
                    ADD_REACTIONS: false
                })
            })
        }

        await args.member!.roles!.add(muteRole, "Muted by Phant.")
        */

    }
}