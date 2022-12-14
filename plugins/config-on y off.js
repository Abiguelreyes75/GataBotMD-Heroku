import fetch from 'node-fetch'
import fs from 'fs'
//import knights from 'knights-canvas'

let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

const sections = [
{
title: `๐๐๐๐๐ผ ๐ฟ๐ ๐พ๐๐๐๐๐๐๐๐ผ๐พ๐๐๐`,
rows: [
{title: "๐ ๐ฝ๐๐๐๐๐๐๐๐ฟ๐ผ | ๐๐๐๐พ๐๐๐", description: "๐พ๐ค๐ฃ๐ฉ๐๐ฃ๐๐๐ค ๐๐ ๐ก๐ ๐ฝ๐๐๐ฃ๐ซ๐๐ฃ๐๐๐ ๐ฅ๐๐ง๐ ๐๐ก ๐๐ง๐ช๐ฅ๐ค\n๐พ๐ค๐ฃ๐ฉ๐๐ฃ๐ฉ ๐ค๐ ๐ฉ๐๐ ๐๐๐ก๐๐ค๐ข๐ ๐๐ค๐ง ๐ฉ๐๐ ๐๐ง๐ค๐ช๐ฅ", rowId: `${usedPrefix + command} welcome`},
{title: "๐ ๐ฟ๐๐๐๐พ๐๐ผ๐ | ๐ฟ๐๐พ๐๐๐พ๐", description: "๐๐ค๐ฉ๐๐๐๐๐๐๐๐ค๐ฃ๐๐จ ๐๐ ๐๐ง๐ช๐ฅ๐ค\n๐๐ง๐ค๐ช๐ฅ ๐๐ค๐ฉ๐๐๐๐๐๐ฉ๐๐ค๐ฃ๐จ", rowId: `${usedPrefix + command} detect`},  
{title: "๐ ๐ผ๐๐๐๐๐๐๐๐๐๐", description: "๐๐ช๐๐ ๐๐ ๐ฃ๐๐ซ๐๐ก ๐ผ๐ช๐ฉ๐ค๐ขรก๐ฉ๐๐๐๐ข๐๐ฃ๐ฉ๐ ๐๐ฃ ๐พ๐๐๐ฉ๐จ\n๐๐๐ซ๐๐ก ๐ช๐ฅ ๐ผ๐ช๐ฉ๐ค๐ข๐๐ฉ๐๐๐๐ก๐ก๐ฎ ๐๐ฃ ๐พ๐๐๐ฉ๐จ", rowId: `${usedPrefix + command} autolevelup`}, 
{title: "โ ๐๐๐๐๐๐๐๐๐๐ | ๐๐๐๐๐๐๐พ๐", description: "๐๐จ๐๐ง ๐ก๐๐จ ๐๐ช๐ฃ๐๐๐ค๐ฃ๐๐จ ๐ฅ๐๐ง๐ ๐จ๐๐๐๐ง ๐ฎ/๐ค ๐รฑ๐๐๐๐ง ๐๐ฃ ๐๐ก ๐๐ง๐ช๐ฅ๐ค\n๐๐จ๐ ๐ฉ๐๐ ๐๐ช๐ฃ๐๐ฉ๐๐ค๐ฃ๐จ ๐ฉ๐ค ๐ง๐๐ข๐ค๐ซ๐ ๐๐ฃ๐/๐ค๐ง ๐๐๐ ๐๐ฃ ๐ฉ๐๐ ๐๐ง๐ค๐ช๐ฅ", rowId: `${usedPrefix + command} restrict`},	
{title: "๐ซ ๐ผ๐๐๐๐๐๐ผ๐๐ผ๐ | ๐ผ๐๐๐๐พ๐ผ๐๐", description: "๐๐๐๐๐ช๐ฉ๐๐ง ๐๐ก๐ค๐ฆ๐ช๐๐ค๐จ ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐ก๐ก๐๐ข๐๐ฃ ๐ค ๐ง๐๐๐ก๐๐๐๐ฃ ๐ซ๐๐๐๐ค๐ก๐ก๐๐ข๐๐๐ ๐๐ก ๐ฝ๐ค๐ฉ\n๐๐ญ๐๐๐ช๐ฉ๐ ๐๐ก๐ค๐๐?๐จ ๐ฉ๐ค ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐๐๐ก๐ก ๐ค๐ง ๐ข๐๐?๐ ๐ ๐ซ๐๐๐๐ค ๐๐๐ก๐ก ๐ฉ๐ค ๐ฉ๐๐ ๐ฝ๐ค๐ฉ", rowId: `${usedPrefix + command} anticall`},
{title: "๐ ๐๐๐ฟ๐ ๐๐๐ฝ๐๐๐พ๐ | ๐๐๐ฝ๐๐๐พ ๐๐๐ฟ๐", description: "๐๐จ๐๐ง ๐๐ก ๐ฝ๐ค๐ฉ ๐๐ฃ ๐๐ค๐๐ค ๐๐ช๐๐ก๐๐๐ค ๐ค ๐๐ง๐๐ซ๐๐๐ค\n๐๐จ๐ ๐ฉ๐๐ ๐ฝ๐ค๐ฉ ๐๐ฃ ๐๐ช๐๐ก๐๐ ๐ค๐ง ๐๐ง๐๐ซ๐๐ฉ๐ ๐๐ค๐๐", rowId: `${usedPrefix + command} public`},
{title: "โ ๐๐๐พ๐๐๐๐ผ ๐ผ๐๐๐๐๐ผ๐๐๐พ๐ผ | ๐ผ๐๐๐๐๐๐ผ๐ฟ", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ฉ๐๐ฃ๐๐ ๐ก๐ค๐จ ๐ข๐๐ฃ๐จ๐๐๐๐จ ๐๐ค๐ข๐ค ๐๐รญ๐๐ค\n๐๐๐?๐ ๐ฉ๐๐ ๐ฝ๐ค๐ฉ ๐๐๐ซ๐ ๐ฉ๐๐ ๐ข๐๐จ๐จ๐๐๐๐จ ๐๐จ ๐๐๐๐", rowId: `${usedPrefix + command} autoread`},
{title: "๐ ๐ฝ๐๐ ๐๐๐๐๐๐๐ผ๐ | ๐ฝ๐๐ ๐๐๐๐๐๐๐ผ๐๐๐ ", description: "๐๐๐ง๐ ๐ฅ๐๐ง๐ข๐๐ฉ๐๐ง ๐ค ๐ฃ๐ค ๐ฆ๐ช๐ ๐๐ก ๐๐ค๐ฉ ๐จ๐ ๐ช๐ฃ๐ ๐ฉ๐๐ข๐ฅ๐ค๐ง๐๐ก๐ข๐๐ฃ๐ฉ๐ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค๐จ\n๐๐ค ๐ฉ๐๐ข๐ฅ๐ค๐ง๐๐ง๐๐ก๐ฎ ๐๐ก๐ก๐ค๐ฌ ๐ค๐ง ๐๐๐จ๐๐ก๐ก๐ค๐ฌ ๐ฉ๐๐ ๐๐ค๐ฉ ๐ฉ๐ค ๐๐ค๐๐ฃ ๐๐ฃ ๐๐ง๐ค๐ช๐ฅ๐จ", rowId: `${usedPrefix + command} temporal`},
{title: "๐? ๐๐๐๐พ๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐จ๐ ๐๐ฃ๐ซ๐๐ ๐จ๐ฉ๐๐๐?๐๐ง๐จ ๐๐๐ก ๐๐ค๐ฉ\n๐๐๐ซ๐ ๐ฉ๐๐ ๐๐ค๐ฉ ๐จ๐๐ฃ๐ ๐จ๐ฉ๐๐๐?๐๐ง๐จ", rowId: `${usedPrefix + command} stickers`},	
{title: "๐ช ๐ผ๐๐๐๐๐๐๐พ๐๐๐", description: "๐๐ค๐๐ ๐๐ข๐๐๐๐ฃ, ๐ซ๐๐๐๐ค, ๐๐๐, ๐๐ฃ๐ก๐๐๐ ๐๐ฅ๐ ๐๐ ๐๐ค๐ฃ๐ซ๐๐ง๐ฉ๐๐ง๐ ๐๐ฃ ๐๐ฉ๐๐๐?๐๐ง ๐ผ๐ช๐ฉ๐ค๐ข๐๐ฉ๐๐๐๐ข๐๐ฃ๐ฉ๐\n๐ผ๐ก๐ก ๐๐ข๐๐๐, ๐ซ๐๐๐๐ค, ๐๐๐, ๐๐ฅ๐ ๐ก๐๐ฃ๐?๐จ ๐๐๐ก๐ก ๐ฝ๐ ๐พ๐ค๐ฃ๐ซ๐๐ง๐ฉ๐๐ ๐๐ค ๐๐ฉ๐๐๐?๐๐ง ๐ผ๐ช๐ฉ๐ค๐ข๐๐ฉ๐๐๐๐ก๐ก๐ฎ", rowId: `${usedPrefix + command} autosticker`},	
{title: "๐คก ๐๐๐ผ๐พ๐พ๐๐๐๐๐ | ๐๐๐ผ๐พ๐๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ง๐๐๐๐๐๐ค๐ฃ๐ ๐ ๐๐๐ฃ๐จ๐๐๐๐จ\n๐๐๐?๐ ๐ฉ๐๐ ๐ฝ๐ค๐ฉ ๐ง๐๐๐๐ฉ ๐ฉ๐ค ๐๐๐จ๐จ๐๐๐๐จ", rowId: `${usedPrefix + command} reaction`},
{title: "๐ ๐ผ๐๐ฟ๐๐๐", description: "๐๐จ๐๐ง ๐ก๐ค๐จ ๐พ๐ค๐ข๐๐ฃ๐๐ค๐จ ๐๐ ๐ผ๐ช๐๐๐ค๐จ\n๐๐จ๐ ๐ผ๐ช๐๐๐ค ๐พ๐ค๐ข๐ข๐๐ฃ๐๐จ", rowId: `${usedPrefix + command} audios`},	
{title: "๐ ๐๐๐ฟ๐ ๐๐๐๐๐ | ๐๐๐ฟ๐ +18", description: "๐๐ค๐จ๐ฉ๐ง๐๐ง ๐พ๐ค๐ข๐๐ฃ๐๐ค๐จ +18\n๐พ๐ค๐ข๐ข๐๐ฃ๐๐จ +18", rowId: `${usedPrefix + command} modohorny`},	
{title: "โข๏ธ ๐ผ๐๐๐๐๐๐๐๐พ๐๐ | ๐ผ๐๐๐๐๐๐๐๐พ", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐จ๐ค๐ฃ ๐ซ๐ช๐ก๐๐๐ง๐๐จ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค๐จ\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐๐ง๐ ๐ซ๐ช๐ก๐๐๐ง ๐๐ฃ ๐๐ง๐ค๐ช๐ฅ๐จ", rowId: `${usedPrefix + command} antitoxic`}, 
{title: "๐ ๐ผ๐๐๐ ๐๐๐ | ๐ผ๐๐๐ ๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐ฃ๐๐๐ ๐จ๐ ๐ค๐๐ช๐ก๐ฉ๐ ๐๐ฃ ๐๐ง๐ช๐ฅ๐ค๐จ\n๐๐๐?๐ ๐ฃ๐ค๐ฉ๐๐๐ฃ๐ ๐๐๐๐ ๐๐ฃ ๐๐ง๐ค๐ช๐ฅ๐จ", rowId: `${usedPrefix + command} antiver`},
{title: "๐๏ธ ๐ผ๐๐๐๐๐๐๐๐๐๐ผ๐ | ๐ผ๐๐๐๐ฟ๐๐๐๐๐", description: "๐๐ค๐จ ๐ข๐๐ฃ๐จ๐๐๐๐จ ๐๐ก๐๐ข๐๐ฃ๐๐๐ค๐จ, ๐๐ก ๐ฝ๐ค๐ฉ ๐ก๐ค ๐ข๐ค๐จ๐ฉ๐ง๐๐ง๐\n๐ฟ๐๐ก๐๐ฉ๐๐ ๐ข๐๐จ๐จ๐๐๐๐จ, ๐ฉ๐๐ ๐ฝ๐ค๐ฉ ๐ฌ๐๐ก๐ก ๐จ๐๐ค๐ฌ ๐๐ฉ", rowId: `${usedPrefix + command} antidelete`},	
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐๐๐๐ผ๐พ๐๐๐๐ผ๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ฃ๐ช๐ข๐๐ง๐ค๐จ ๐๐ฃ ๐ก๐ค๐จ ๐๐ง๐ช๐ฅ๐ค๐จ ๐๐ค๐ฃ๐จ๐๐๐๐ง๐๐๐ค๐จ ๐๐๐ก๐จ๐ค๐จ\n๐๐ก๐๐ข๐๐ฃ๐๐ฉ๐ ๐ฃ๐ช๐ข๐๐๐ง๐จ ๐๐ฃ ๐ฉ๐๐ ๐๐ง๐ค๐ช๐ฅ๐จ ๐๐ค๐ฃ๐จ๐๐๐๐ง๐๐ ๐๐๐?๐", rowId: `${usedPrefix + command} antifake`},
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐ผ๐พ๐๐ | ๐ผ๐๐๐๐๐๐๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐ง๐ช๐ฅ๐ค๐จ ๐๐ ๐๐๐๐ฉ๐จ๐ผ๐ฅ๐ฅ\n๐๐๐ข๐ค๐ซ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐๐๐ฉ๐จ๐ผ๐ฅ๐ฅ ๐๐ง๐ค๐ช๐ฅ๐จ", rowId: `${usedPrefix + command} antilink`},   
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐ผ๐พ๐๐ 2 |๐ผ๐๐๐๐๐๐๐ 2", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐๐ฃ๐ก๐๐๐๐จ ๐ฆ๐ช๐ ๐๐ค๐ฃ๐ฉ๐๐ฃ๐๐ ๐๐ฉ๐ฉ๐ฅ๐จ\n๐๐๐ข๐ค๐ซ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ค๐ฃ๐ฉ๐๐๐ฃ๐๐ฃ๐ ๐๐ฉ๐ฉ๐ฅ๐จ", rowId: `${usedPrefix + command} antilink2`},    
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐๐๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐๐ฃ๐ซ๐๐๐ฃ ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐๐?๐๐ค๐?\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐จ๐๐ฃ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐๐?๐๐ค๐?", rowId: `${usedPrefix + command} antitiktok`},
{title: "๐ ๐ผ๐๐๐ ๐๐๐ ๐๐๐ฝ๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐๐ฃ๐ซ๐๐๐ฃ ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐ค๐ช๐๐ช๐๐\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐จ๐๐ฃ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐ค๐ช๐๐ช๐๐", rowId: `${usedPrefix + command} antiyoutube`},
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐๐๐๐ผ๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐๐ฃ๐ซ๐๐๐ฃ ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐๐ก๐๐๐ง๐๐ข\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐จ๐๐ฃ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐๐ก๐๐๐ง๐๐ข", rowId: `${usedPrefix + command} antitelegram`},
{title: "๐ ๐ผ๐๐๐ ๐๐ผ๐พ๐๐ฝ๐๐๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐๐ฃ๐ซ๐๐๐ฃ ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐๐๐๐๐ค๐ค๐?\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐จ๐๐ฃ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐๐๐๐๐ค๐ค๐?", rowId: `${usedPrefix + command} antifacebook`},
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐๐ผ๐๐๐ผ๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐๐ฃ๐ซ๐๐๐ฃ ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐จ๐๐ฃ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐ฃ๐จ๐ฉ๐๐๐ง๐๐ข", rowId: `${usedPrefix + command} antiinstagram`},
{title: "๐ ๐ผ๐๐๐ ๐๐๐๐๐๐๐", description: "๐๐ก๐๐ข๐๐ฃ๐๐ง ๐ ๐ก๐๐จ ๐ฅ๐๐ง๐จ๐ค๐ฃ๐๐จ ๐ฆ๐ช๐ ๐๐ฃ๐ซ๐๐๐ฃ ๐๐ฃ๐ก๐๐๐๐จ ๐๐ ๐๐ฌ๐๐ฉ๐ฉ๐๐ง\n๐๐๐ข๐ค๐ซ๐ ๐ฅ๐๐ค๐ฅ๐ก๐ ๐ฌ๐๐ค ๐จ๐๐ฃ๐ ๐ก๐๐ฃ๐?๐จ ๐๐ง๐ค๐ข ๐๐ฌ๐๐ฉ๐ฉ๐๐ง", rowId: `${usedPrefix + command} antitwitter`},
{title: "โ๏ธ ๐๐พ๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ง๐๐จ๐ฅ๐ค๐ฃ๐๐ ๐จ๐ค๐ก๐ค ๐๐ฃ ๐พ๐๐๐ฉ๐จ ๐๐ง๐๐ซ๐๐๐ค๐จ\n๐๐๐ฅ๐ก๐ฎ ๐ค๐ฃ๐ก๐ฎ ๐๐ฃ ๐๐ง๐๐ซ๐๐ฉ๐ ๐พ๐๐๐ฉ๐จ", rowId: `${usedPrefix + command} pconly`},
{title: "โ๏ธ ๐๐พ๐๐๐๐", description: "๐๐๐๐๐ง ๐ฆ๐ช๐ ๐๐ก ๐ฝ๐ค๐ฉ ๐ง๐๐จ๐ฅ๐ค๐ฃ๐๐ ๐จ๐ค๐ก๐ค ๐๐ฃ ๐พ๐๐๐ฉ๐จ ๐๐ ๐๐ง๐ช๐ฅ๐ค๐จ\n๐๐๐?๐ ๐ฉ๐๐ ๐ฝ๐ค๐ฉ ๐ง๐๐จ๐ฅ๐ค๐ฃ๐ ๐ค๐ฃ๐ก๐ฎ ๐๐ฃ ๐๐ง๐ค๐ช๐ฅ ๐พ๐๐๐ฉ๐จ", rowId: `${usedPrefix + command} gconly`},
]}, ]
let name = await conn.getName(m.sender)

const listMessage = {
text: '*~ CENTRO DE CONFIGURACIรN*',
footer: `โญโโโ[ *๐ผ๐๐๐๐๐๐ ๐๐ผ๐๐ผ๐ฝ๐๐* ]โโโโฌฃ
โโโโโโโโโโโโโโโโโโ
โ๐ *ยกHola | Hi!* ${name}
โโโโโโโโโโโโโโโโโโ
โฐโโโโโโโโฐ *${vs}* โฑโโโโโโโฌฃ
โญโโโโโโโโโโโโโโฌฃ
โ *๐๐๐๐๐๐๐๐ ๐๐๐๐ ๐๐๐๐๐ผ๐๐ ๐ ๐๐๐*
โ *๐๐๐ ๐พ๐๐๐ผ๐๐ฟ๐๐ ๐ฟ๐ ๐๐๐๐ ๐๐๐๐๐ผ๐๐*
โโโโโโโโโโโโโโโโโโ
โโ๏ธ _${usedPrefix}on *:* off *bienvenida | welcome*_
โโ๏ธ _${usedPrefix}on *:* off *avisos | detect*_
โโ๏ธ _${usedPrefix}on *:* off *autonivel | autolevelup*_
โโ๏ธ _${usedPrefix}on *:* off *restringir | restrict*_
โโ๏ธ _${usedPrefix}on *:* off *antillamar | anticall*_
โโ๏ธ _${usedPrefix}on *:* off *publico | public*_
โโ๏ธ _${usedPrefix}on *:* off *autovisto | autoread*_
โโ๏ธ _${usedPrefix}on *:* off *temporal*_
โโ๏ธ _${usedPrefix}on *:* off *stickers*_
โโ๏ธ _${usedPrefix}on *:* off *autosticker*_
โโ๏ธ _${usedPrefix}on *:* off *reacciones | reaction*_
โโ๏ธ _${usedPrefix}on *:* off *audios*_
โโ๏ธ _${usedPrefix}on *:* off *modocaliente | modohorny*_
โโ๏ธ _${usedPrefix}on *:* off *antitoxicos | antitoxic*_
โโ๏ธ _${usedPrefix}on *:* off *antiver | antiviewonce*_
โโ๏ธ _${usedPrefix}on *:* off *antieliminar | antidelete*_
โโ๏ธ _${usedPrefix}on *:* off *antinternacional | antifake*_
โโ๏ธ _${usedPrefix}on *:* off *antienlace | antilink*_
โโ๏ธ _${usedPrefix}on *:* off *antienlace2 | antilink2*_
โโ๏ธ _${usedPrefix}on *:* off *antitiktok | antitk*_
โโ๏ธ _${usedPrefix}on *:* off *antiyoutube | antiyt*_
โโ๏ธ _${usedPrefix}on *:* off *antitelegram | antitel*_
โโ๏ธ _${usedPrefix}on *:* off *antifacebook | antifb*_
โโ๏ธ _${usedPrefix}on *:* off *antinstagram | antig*_
โโ๏ธ _${usedPrefix}on *:* off *antitwitter | antitw*_
โโ๏ธ _${usedPrefix}on *:* off *soloprivados | pconly*_
โโ๏ธ _${usedPrefix}on *:* off *sologrupos | gconly*_
โฐโโโโโโโโโโโโโโฌฃ
${wm}`,
title: null,
buttonText: "๐พ๐๐๐๐๐๐๐๐ผ๐",
sections }

let isEnable = /true|enable|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome':
case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect':
case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
    
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
		
case 'antidelete': 
case 'antieliminar':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
    
case 'public':
case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink':
case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2':
case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok':
case 'antitk':
case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube':
case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram':
case 'antitl':
case 'antitele':
case 'antitg':
case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook':
case 'antifb':
case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram':
case 'antinstagram':
case 'antiig':
case 'antig':
case 'antiinsta':
case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter':
case 'antitw':
case 'antitwit':
case 'antitwter':
case 'antitwiter':
case 'antiTwr':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break
    
case 'modohorny':
case 'modocaliente':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
		
//case 'temporal':
//if (m.isGroup) {
//if (!(isAdmin || isOwner)) {
//global.dfail('admin', m, conn)
//throw false
//}}
//chat.temporal = isEnable          
//break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
    
case 'autolevelup':
case 'autonivel':
isUser = true
user.autolevelup = isEnable
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction':
case 'reaccion':
case 'emojis':
case 'antiemojis':
case 'reacciones':
case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic':
case 'antitoxicos':
case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver':
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional':
case 'antinternacional':
case 'antinternational':
case 'antifake':
case 'antifalsos':
case 'antivirtuales':
case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
    
case 'restrict':
case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread':
case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['autoread'] = isEnable
break
    
case 'anticall':
case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
    
case 'pconly':
case 'privateonly':
case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly':
case 'grouponly':
case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
    
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return conn.sendMessage(m.chat, listMessage, {quoted: fkontak})		
throw false
}
//conn.sendButton
	
await conn.sendButton(m.chat, `${rg}แฆ *_COMANDO_* *|* ${type} 
แฆ *_ACTUALMENTE_* *|* ${isEnable ? 'ACTIVADO' : 'DESACTIVADO'} 
แฆ *_EN ESTE_* *|* ${isAll ? 'BOT' : isUser ? '' : 'CHAT'}`, wm, null, [[`${isEnable ? '๐ DESACTIVAR' : '๐ ACTIVAR'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['๐๐ค๐ก๐ซ๐๐ง ๐๐ก ๐๐๐ฃ๐ชฬ | ๐ฝ๐๐๐? ๐ฉ๐ค ๐๐๐ฃ๐ช ๐', '.menu']], fkontak, m)}
//await conn.sendButton(m.chat, null, ajuste, null, [['๐ ๐๐๐๐๐๐๐ผ๐พ๐๐๐ | ๐๐๐๐ ๐๐๐๐ ๐', `/infomenu`], ['โ๏ธ ๐พ๐๐๐๐๐ ๐ฟ๐ ๐พ๐๐๐๐๐๐๐๐ผ๐พ๐๐๐ โ๏ธ', `/on`]], fkontak, m)
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
