const {
    SlashCommandBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Check the bot status.'),

    async execute(interaction) {
        await interaction.reply({
            content: `Pong! 🏓 ${interaction.client.ws.ping}ms`
        });
    }
};