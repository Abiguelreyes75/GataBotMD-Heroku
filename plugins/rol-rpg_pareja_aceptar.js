import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, text, participants, groupMetadata }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
//let username = conn.getName(who)

if(isNaN(text)) {
var number = text.split`@`[1]
} else if(!isNaN(text)) {
var number = text
}

if(!text && !m.quoted) return conn.reply(m.chat, `*ESCRIBA EL NUMERO, ETIQUETE O RESPONDA AL MENSAJE DE LA PERSONA QUE QUIERE QUE SEA SU PAREJA*`, m) 
if(isNaN(number)) return conn.reply(m.chat, `*EL NUMERO QUE ESCRIBIÓ NO ES VÁLIDO*`, m)
if(number.length > 15) return conn.reply(m.chat, `*MUCHOS NÚMEROS, NO ES VÁLIDO*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = conn.getName(m.quoted.sender)
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
}  
} catch (e) {
} finally {
let users = m.isGroup ? participants.find(v => areJidsSameUser(v.jid == user)) : {}
let yo = conn.getName(m.sender)
let tu = conn.getName(who)
    if(!users) return conn.reply(m.chat, `*PERSONA NO ENCONTRADA, DEBE DE ESTAR EN ESTE GRUPO*`, m)
    if(user === m.sender) return conn.reply(m.chat, `*NO PUEDE SER PAREJA USTED MISMO*`, m)
    if(user === conn.user.jid) return conn.reply(m.chat, `*YO NO PUEDO SER SU PAREJA JAJAJ*`, m)
    

    if(global.db.data.users[user].pasangan != m.sender){
      conn.reply(m.chat, `LA SOLICITUD DE ${conn.getName(who)} PARA QUE SEAS SU PAREJA HA CADUCADO`, m, { contextInfo: { mentionedJid: [user]}})
    }else{
      global.db.data.users[m.sender].pasangan = user
      conn.reply(m.chat, `Felicitaciones, oficialmente están saliendo. ${conn.getName(who)}\n\nQue dure para siempre y siempre sea feliz ${conn.getName(who)} 💓 @${yo} 🥳🥳🥳`,m, { contextInfo: { mentionedJid: [user, who, yo]}})
    }
	}	
}
handler.command = /^(aceptar|acepto)$/i
handler.group = true
handler.fail = null
export default handler
