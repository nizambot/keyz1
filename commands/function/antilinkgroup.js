module.exports = { 
name: "antilinkgroup", //@arifirazzaq2001
admin: true,
botAdmin: true,

async functions(m) { 
let { conn } = data
 if (m.message && m.quoted && m.text && m.text.includes("chat.whatsapp.com")) {
m.reply("Maaf Anda Di Keluarkan")
await conn.groupRemove(m.chat, [m.quoted.sender])
}
}
}


