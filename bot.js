require("dotenv").config();
const TelegramBot = require("node-telegram-bot-api");
const express = require("express");

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });
const app = express();

bot.onText(/\/start/, (msg) => {
  const welcomeText = `
🐾 *Welcome to World Dog Community!*  

🎮 Play Tic Tac Toe, meet pups, and have fun.  
Tap below to start the game ⬇️
`;
  bot.sendMessage(msg.chat.id, welcomeText, {
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [
        [{ text: "🎮 Play Now", web_app: { url: "https://wldg.vercel.app" } }],
      ],
    },
  });
});

app.get("/", (req, res) => res.send("🐶 WLDG Bot is Running!"));
app.listen(process.env.PORT || 3000, () => console.log("✅ Server Live"));
