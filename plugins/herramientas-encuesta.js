let handler = async (m, { conn, text, args, usedPrefix, command }) => {	
if (!args[0]) throw `⚠️️ *_Ingrese un texto para iniciar la escuesta._*\n\n📌 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`
if (!text.includes('|')) throw  `⚠️️ Separe las encuestas con *|* \n\n📌 Ejemplo : \n*${usedPrefix + command}* texto|texto2...`
let a = []
let b = text.split('|')
for (let c = 0; c < b.length; c++) { a.push([b[c]]) }
let texto = `📊 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝘿𝘼 𝙋𝙊𝙍 *${conn.getName(m.sender)}*`
return conn.sendPoll(m.chat, texto, a, m, {mentions: await conn.parseMention(texto)})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
