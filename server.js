
const express = require('express')
const server = express();

server.all('/', (req, res)=>{
    res.send("WAIT 3 MINUTES TO SEE YOUR RPC")
})

function keepAlive(){
    server.listen(process.env.PORT, ()=>{console.log("RPC IS READY")});
}
module.exports = keepAlive
