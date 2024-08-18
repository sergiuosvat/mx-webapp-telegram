const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config({path: '.env.local'});

const token = process.env.TELEGRAM_BOT_TOKEN;

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
