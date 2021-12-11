///////////////////////////////////

//💙 Credit Infos 
//💜 This Project Made By Aditya Codez
//💛 Must Give Credits While Using 
//💚 Support Server 
//♥️ https://discord.gg/z6RMrphPXE
//🔥 Youtube 
//🙉 https://youtube.com/adityacodez
//🏘️ ©Aditya Codez™

///////////////////////////////////

const discord = require('discord.js-selfbot-v11');
const fs = require('fs');

const client = new discord.Client();
const keepAlive = require('./server.js');
const config = require('./config.json');

const events = fs.readdirSync('./events/');
events.forEach(file => {
	const eventname = file.split('.')[0];
	const event = require(`./events/${file}`);
	client.on(eventname, event.bind(null, client));
});

keepAlive();
client.login(process.env.token);



///////////////////////////////////

//💙 Credit Infos 
//💜 This Project Made By Aditya Codez
//💛 Must Give Credits While Using 
//💚 Support Server 
//♥️ https://discord.gg/z6RMrphPXE
//🔥 Youtube 
//🙉 https://youtube.com/adityacodez
//🏘️ ©Aditya Codez™

///////////////////////////////////