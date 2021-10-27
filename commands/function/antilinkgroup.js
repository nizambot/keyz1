module.exports = { 
name: "antilinkgroup", //@arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) { 
let { conn } = data
 if (m.message && m.quoted && m.text.includes(`/(https:\/\/chat.whatsapp.com)/gi`) {
 if (!m.sender == this.user.jid) return
var RegEx = /^[!&z?=#.+\/]/gi;
m.reply(`Maaf @${m.sender.split("@")[0]} *Anti Link Group Terdeteksi!* \n_Maaf Anda Di Keluarkan._`)
await conn.groupRemove(m.chat, [m.quoted.sender])
}
}
}
