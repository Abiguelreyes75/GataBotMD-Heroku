let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let a = []
let b = text.split('|')

if (!b[1]) return conn.reply(m.chat, `${mg}𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)
if (b[25]) return conn.reply(m.chat, `${fg}𝙈𝘼𝙓𝙄𝙈𝙊 *25* 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎!!\n\n𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n𝙈𝘼𝙓𝙄𝙈𝙐𝙈 *25* 𝙊𝙋𝙏𝙄𝙊𝙉𝙎!!\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `📊 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝘿𝘼 𝙋𝙊𝙍\n❤️ *${conn.getName(m.sender)}*\n${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
