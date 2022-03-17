import { Command } from 'discord-akairo';
import { Message, MessageEmbed } from 'discord.js';
const images = [
    'https://lastfm.freetls.fastly.net/i/u/ar0/7b8b42365aeccd76b1388df3641fcad3.jpg',
    'https://lastfm.freetls.fastly.net/i/u/500x500/025847991d72e97caa5b58a45935204a.jpg',
    'https://m.media-amazon.com/images/I/61lPFpXneML._SS500_.jpg'
]
export default class PingCommand extends Command {
    constructor() {
        super('userinfo', {
            aliases: ['uinfo', 'userinfo'],
            args: [
                {
                    id: "member",
                    type: "user",
                    prompt: {
                        start: "Please specify a user",
                        retry: "A user please..."
                    },
                }
            ]
        })
    }

    public async exec(message: Message, args:any) {
        const embed = new MessageEmbed()
        .setAuthor("Phant")
        .setTitle(`User Information of ${args.member.username}`)
        .setDescription(`All the user information of beloved member ${args.member.username}`)
        .setFooter("Sent with Love by Phant")
        .setThumbnail(args.member.defaultAvatarURL)
        .setImage(images[Math.floor(Math.random() * images.length)])
        .addFields([
            {name: "Username", value: args.member.username},
            {name: "Account Creation", value: args.member.createdAt},
            {name: "Id", value: args.member.id}
        ])

        await message.channel.send(embed)
    }
}

