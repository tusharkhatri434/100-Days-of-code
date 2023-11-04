const {Telegraf} = require('telegraf');

const bot = new Telegraf("6915274292:AAGnL-EFbwuKL_9jSblA3Je0d0UeN9k5hFw");

bot.start((ctx)=> ctx.reply("welcome to tushar AI Bot"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.launch();