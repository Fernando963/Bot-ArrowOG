let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'agradable.m4a', '', 'xd', m)
}
handler.help = ['agradable']
handler.tags = ['premium']
handler.command = /^(agradable)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.admin = true
handler.botAdmin = false
handler.fail = null
handler.limit = false
handler.exp = 100
module.exports = handler
