const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "NOVA~4MZgkR4A#b8XAQUo9sgcIkGO4y3TtCwFQrx8ObA5lK0JrThvdjnI",
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY NOVA-XMD🤍*",
WELCOME: process.env.WELCOME || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
ANTI_LINK: process.env.ANTI_LINK || "true",
MENTION_REPLY: process.env.MENTION_REPLY || "false",
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/jsqqne.jpg",
PREFIX: process.env.PREFIX || ".",
BOT_NAME: process.env.BOT_NAME || "💠𝐄𝐋𝐈𝐓𝐄 𝐂𝐔𝐁𝐄𝐑𝐕𝐀𝐔𝐋𝐓💠",
STICKER_NAME: process.env.STICKER_NAME || "𝐂𝐘𝐁𝐄𝐑𝐕𝐀𝐔𝐋𝐓-XMD",
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
DELETE_LINKS: process.env.DELETE_LINKS || "true",
OWNER_NUMBER: process.env.OWNER_NUMBER || "254762334605",
OWNER_NAME: process.env.OWNER_NAME || "*👨‍💻 𝐊𝐈𝐍𝐆 ⃟ 𝐎𝐅 ⃟ 𝐂𝐎𝐃𝐄𝐒 🔐👑*",
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝙱.𝙼.𝙱-𝚇𝙼𝙳*",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/jsqqne.jpg",
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *NOVA-XMD*⚡",
READ_MESSAGE: process.env.READ_MESSAGE || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
ANTI_BAD: process.env.ANTI_BAD || "false",
MODE: process.env.MODE || "private",
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
PUBLIC_MODE: process.env.PUBLIC_MODE || "fse",
AUTO_TYPING: process.env.AUTO_TYPING || "false",
READ_CMD: process.env.READ_CMD || "false",
DEV: process.env.DEV || "255767862457",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
ANTICALL: process.env.ANTICALL || "true"
};
