const TelegramBot = require('node-telegram-bot-api');

const token = '7434778720:AAH-yuMc0cwBu0uxVSbENtvFUep1FQC-H4U';

console.log('Bot has been started ...');

const bot = new TelegramBot(token, { polling: true });

bot.onText(/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to the bot!');
});

bot.onText(/website/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 't.me/mxtestwebappbot/testingmx');
});