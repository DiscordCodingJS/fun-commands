const math = require('mathjs');
const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

    if (!args[0]) return message.channel.send('Please input a calculation.');
    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send('Sorry, please input a valid calculation.');
    }

    const embed = new Discord.RichEmbed()
        .setColor(0xffffff)
        .setTitle('Math Calculation')
        .addField('Input', `\`\`\`js\n${args.join('')}\`\`\``)
        .addField('Output', `\`\`\`js\n${resp}\`\`\``)

    message.channel.send(embed);

}
module.exports.config = {
    name: "calc",
    aliases: ["calc", "cal", "calculate"],
    usage: "_calc",
    description: "",
    accessableby: "Members"
}