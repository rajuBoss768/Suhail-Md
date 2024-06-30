const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923314927710";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_41_06_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTM2LFxuICAgICAgICA0NixcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM1LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMixcbiAgICAgICAgNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxLFxuICAgICAgICA3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDQwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA5MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTczLFxuICAgICAgICA1OCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMixcbiAgICAgICAgMTYwLFxuICAgICAgICA1NixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAyLFxuICAgICAgICA5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDUxLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM1LFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIwLFxuICAgICAgICAxODMsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTksXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTE5LFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgNjEsXG4gICAgICAgIDM2LFxuICAgICAgICA1LFxuICAgICAgICAyMzksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNDksXG4gICAgICAgIDU4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDg1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYVZaaENBc2tEMDNTUFdEYVJtNmR4VVdLZGxVWE52N1EwZnMzdnE3azQ2az1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS2NKdUI5d2lRbTZkbnh4ZldpRUhLUVwiLFxuICBcInBob25lSWRcIjogXCJlMDhkMGZkZi00ZjcwLTRiNWQtOGM0NC0wMTI0ZjNkNzcxYjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM2LFxuICAgICAgNzcsXG4gICAgICAyMTksXG4gICAgICAxMDUsXG4gICAgICAxMTUsXG4gICAgICA2NSxcbiAgICAgIDE3NyxcbiAgICAgIDQsXG4gICAgICAxNSxcbiAgICAgIDIxNyxcbiAgICAgIDksXG4gICAgICAxMDgsXG4gICAgICAxNTEsXG4gICAgICAwLFxuICAgICAgMTA3LFxuICAgICAgNCxcbiAgICAgIDEwNixcbiAgICAgIDIwNCxcbiAgICAgIDExMixcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNzMsXG4gICAgICAxMCxcbiAgICAgIDkxLFxuICAgICAgMTIxLFxuICAgICAgMzYsXG4gICAgICAxODUsXG4gICAgICA2NyxcbiAgICAgIDEzNSxcbiAgICAgIDIxMSxcbiAgICAgIDcwLFxuICAgICAgMjcsXG4gICAgICAyMTUsXG4gICAgICAxMDMsXG4gICAgICAxOTgsXG4gICAgICAyMDksXG4gICAgICAxNzYsXG4gICAgICAwLFxuICAgICAgMTIxLFxuICAgICAgMjUwLFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV05GNzc3OVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzMxNDkyNzcxMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiOTgxODM0ODkzMTA4MzY6MTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSUc3dGswUWtMU0V0QVlZQXlBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJGUGFrL0FNRTkzTXVIOWo0bE5Sdy9WWGZzRklxOFFwQWtnOFFFQlRzQ0dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImR0RFF2d2pkYkhUL3ZIdndzZi8yVU4wMGR2QlVxWXI3QlE0QjkyL2k3TEVJdktvUmdJd2JYcmJwQzBCdjgwbFVYRjRvTFpMWWlGWldVSERZakNEQ0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkxnRkxhMUxOcWtSYnBUQThUenR5SmVmVFAwVTZhaFRlYjJMZUFoUmR1ZE9UT3RTU290VFZJcGpqZWlhOTl2UWtPVk5sSUlJeWdadjY0U09DUVVKT2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzMxNDkyNzcxMDoxNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NzM2ODUxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTVhsXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFNWGwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJacjRtM0ZQaGRSZmdZODU0K29kVjJ0UWtYSFpHN25JZENuYXYvV0JwUmVvPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE2MjM3Mjk5MyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5NzExOTU0MjY3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" ,Raju",
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Raju",
  ownername:process.env.OWNER_NAME|| "Raju",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
