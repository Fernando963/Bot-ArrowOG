let handler  = async (m, { conn }) => {
       conn.sendFile(m.chat, 'espartanos.m4a', '', 'xd', m)
}
handler.help = ['espartanos']
handler.tags = ['premium']
handler.command = /^(espartanos)$/i
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