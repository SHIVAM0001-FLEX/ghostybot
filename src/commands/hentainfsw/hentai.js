const BaseEmbed = require("../../modules/BaseEmbed");

module.exports = {
  name: "hentai",
  category: "hentainsfw",
  description: "None",
  nsfwOnly: true,
  async execute(bot, message) {
    const lang = await bot.getGuildLang(message.guild.id);

    const data = await bot.neko.nsfw.randomHentaiGif();

    const embed = BaseEmbed(message)
      .setDescription(`${lang.IMAGE.CLICK_TO_VIEW}(${data.url})`)
      .setImage(`${data.url}`);

    message.channel.send({ embed });
  },
};
