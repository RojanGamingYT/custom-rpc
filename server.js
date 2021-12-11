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

const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT 3 MINUTES TO SEE YOUR RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("ADITYA CODEZ RPC IS READY")});
}
module.exports = keepAlive


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