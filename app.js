/*
npm init
npm install nodemon -g
package.json => script => 
"start" = "nodemon app.js",
"start -server" ="node app.js"
npm install express --save
npm install body-parser
npm install socket.io
*/

const express = require('express');
const app = express();
const fs = require('fs');
const socket = require('socket.io');

var PORT = process.env.PORT || 3000;//跟require('http') 後的http.createserver(3000)有何不同
const server = app.listen(PORT);

var getusername ;
var getpassword ;

app.use(express.static('public'));//可以載入位於這個public(port)下面的檔案
console.log("Server is running");

const io = socket(server);
io.on('connection',(socket)=>{//這兩行把server接上socket.io

    console.log(socket.id)
    socket.on('getusername',data=>{
        getusername = data
        console.log(getusername)
    })
    socket.on('getpassword',data=>{
        getpassword = data
        console.log(getpassword)
    })
    

    
})

