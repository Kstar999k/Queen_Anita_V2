//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "09167476447";
global.owner = process.env.OWNER_NUMBER || "08123661796";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid04zeWgvSTEybE1XM01lUVhRR2U5RTFyc2FHZEdJUUg0YThoelFuVVhuaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkF6TW4xazlwM3BRaE41T1FLeUFMV2J2aGdDRXdwRk9uaVByTHlzdVhCVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT28xa214Yk5mZnZudENHTkRTN3YySU8xaUVYUzR3Rm5iZ1pBMWIralZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXT2FIeE5ZejRLWWI2UWFWVG5Jb1dUUnlpN05HUmp4ZGxwOWN6VURodjBVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9LbVIvVGsxWlVkWWlwOE1KeVdaTlAxUU5OUk5pYzk5WEdNa09ZcXk2V009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpzNWJSZUhJOUxSWG9YVjBpVHF3ZHU4Z0VKR0dyUTNQRnZMZDhnQU0zRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0dabWR3QjYvNzlncFVTL2xBbnFJSHZqbitmVDVIa1NLSitzeU1OTHdHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHE5R0hSVTNPVExXSzRoUDZSOEljRWw5cHRPVi9iMTRSdXZPb1Q1OFdCRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNsTWd5Y0Y1TEMyUVMzWEkrY2E5aFZwakxlakdHQTd1TlJ6WHN1dHhxVWhNekphdWtXSlZWcGRod3BlWW5QRTE0dW5vbS9VTUpXaWM0aDJ2S3lhQmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM1LCJhZHZTZWNyZXRLZXkiOiJxVit3WnE2VXl4WkY0bWhjV0NmQXpya01ROUV2ckI5S3NjNzVKWWFjMWJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjM2NjE3OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUIzMDg0MTA1NThEMUMwRjg0QjkxNzI5RjdCNUZCQzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzgxODY2NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEyMzY2MTc5NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1Rjc3NjVDRkYxQ0E2QkU1NjU2MDU5NjM0MjJFRkY2RCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMzODE4NjY1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ4MTIzNjYxNzk2QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjUyNTg1RDJFMENFQjQ1NkJGOURBRjAyN0QxRDA2Njk5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzM4MTg2Njd9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMjM2NjE3OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUQ3NzkzODRBQjg5QkFDNTlGRUQwRTE5NzU4REVCREEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMzgxODY2N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibjV0dzROU1dUWFN5YXVyMnhvTXZJdyIsInBob25lSWQiOiI5Y2E2MzY0MC03Mjc0LTQ5NjAtYjI2ZC0xMThkMTU5YmZiMzciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmtWMHZzQ1Fhcm9yZVN4akVZM2oyRHdZSHhBPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNOMzAwdFpUTmJVWHVZc1FGZ1dhcFlGSW0vaz0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJSQ0FOOUtERiIsIm1lIjp7ImlkIjoiMjM0ODEyMzY2MTc5NjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktTVEFSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOakZxZW9GRUpyeTM3b0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzeTRNaCt6REYycFpKNlNmQ0FTdHBoNlB4RThOSlNoTXFLdnVISzduYUZVPSIsImFjY291bnRTaWduYXR1cmUiOiJPaHZOeU1zbzFGRkhYQUFjTzV3RnZhMGgrR0lNN1RSRUZtVkZycVpEbXhNMGcyYUFiUXVYTkNmSUJSdDRFb1FrZTczNnpIVVRlZEpUcmJSNkR0anJCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieEdJd3Q1TFhPTlR0bnRMYy9NckgyMXVLbUVDT3BTWEs5Y0c5bUJjdTBxd2NtamI2TFA0L3R2eG9RZmVHcVNjWHdTU2l3QnFSY0VERm1Vd0hHZk9uaXc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MTIzNjYxNzk2OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZDh1RElmc3d4ZHFXU2VrbndnRXJhWWVqOFJQRFNVb1RLaXI3aHl1NTJoViJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMzgxODY2NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCSUkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "KING-KSTAR-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
