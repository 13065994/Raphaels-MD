const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber = ['2348121662697']
global.ownername = "Gerald"//owner name
global.ytname = "YT: gohan D"
global.socialm = "GitHub: 13065994"
global.location = "Nigeria"

global.botname = 'gerald-bot-v1' //name of the bot

//sticker details
global.stickername = 'Raph-MD'
global.packname = 'Sticker By'
global.author = 'Raphael Bot'
//console view/theme
global.themeemoji = '⚡️'
global.wm = "gerald bots inc."

//theme link
//global.link = 'https://chat.whatsapp.com/HpF5DuXZFt66bH2D7dIpty'

//custom prefix
global.prefa = ['!']

//false=disable and true=enable
global.welcome = true //auto welcome
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = false //auto typing + recording
global.autoread = true //auto read messages
global.autobio = false //auto update bio
global.anti212 = true //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: '*here you go!* \n\n*🎀 Gerald Bot 🎀*\n\n*🧩 Bot link:* \nhttps://github.com/gerald/Raphaels-MD\n',
    prem: '*This feature can be used by premium user only*',
    admin: '*This feature can be used by admin only*',
    botAdmin: '*This feature can only be used when the bot is a group admin* ',
    owner: '*This feature can be used by owner only and my owner is gerald*',
    group: '*This feature is only for groups*',
    private: '*This feature is only for private chats*',
    wait: '*In process...* ',    
    error: '*Error!*',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})


