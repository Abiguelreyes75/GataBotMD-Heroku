let handler = async (m, { conn, command, text, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

const sections = [{
title: comienzo + ' 🗂️ 𝙏𝙄𝙋𝙊𝙎 𝘿𝙀 𝙇𝙄𝙎𝙏𝘼𝙎 ' + fin,
rows: [
{title: "📛 𝗕𝗟𝗢𝗤𝗨𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗟𝗢𝗖𝗞𝗘𝗗", rowId: `${usedPrefix}listablock`, description: `𝑼𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝑩𝒍𝒐𝒒𝒖𝒆𝒂𝒅𝒐𝒔 𝒑𝒐𝒓 𝒍𝒍𝒂𝒎𝒂𝒓.`},
{title: "⚠️ 𝗔𝗗𝗩𝗘𝗥𝗧𝗜𝗗𝗢𝗦 : 𝗪𝗔𝗥𝗡𝗘𝗗", rowId: `${usedPrefix}listadv`, description: `Usuarios Advertidos por Malas Palabras.`},
{title: "📵 𝗖𝗛𝗔𝗧 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗖𝗛𝗔𝗧𝗦", rowId: `${usedPrefix}chatsbaneados`, description: `Chats donde no pueden usar a GataBot`},
{title: "🚷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗕𝗔𝗡𝗘𝗔𝗗𝗢𝗦 : 𝗕𝗔𝗡𝗡𝗘𝗗 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listbanuser`, description: `Usuarios que no pueden usar a GataBot`},
{title: "🎟️ 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 : 𝗩𝗜𝗣 𝗨𝗦𝗘𝗥𝗦", rowId: `${usedPrefix}listapremium`, description: `Usuarios con Pase Premium`},
{title: "💞 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗘𝗡 𝗨𝗡𝗔 𝗥𝗘𝗟𝗔𝗖𝗜𝗢𝗡 : 𝗥𝗘𝗟𝗔𝗧𝗜𝗢𝗡𝗦𝗛𝗜𝗣", rowId: `${usedPrefix}listaparejas`, description: `Usuarios que están en una Relación Romántica `}]}]

const listMessage = {
  text: `*TIPOS DE LISTAS DE USUARIOS*`,
  footer: wm,
  title: `${htki} *📃 𝙇𝙄𝙎𝙏𝘼 𝙑𝘼𝙍𝙄𝘼𝘿𝘼𝙎* ${htka}`,
  buttonText: `📑 𝙑𝙀𝙍 𝙇𝙄𝙎𝙏𝘼𝙎 📑`,
  sections
}
await conn.sendMessage(m.chat, listMessage, {quoted: fkontak})}
handler.command = /^listas|lists?$/i
export default handler
