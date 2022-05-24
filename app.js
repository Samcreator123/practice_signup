const express = require('express');
const app = express();
const fs = require('fs');
const socket = require('socket.io');
const knex = require('./database/database');
const lgandrgcheck = require('./checkdata/lgandrgcheck');

var PORT = process.env.PORT || 3000;//跟require('http') 後的http.createserver(3000)有何不同
const server = app.listen(PORT);


app.use(express.static('public'));//可以載入位於這個public(port)下面的檔案
console.log("Server is running");

const io = socket(server);
io.on('connection',(socket)=>{//這兩行把server接上socket.io，並進行接收username、password的動作

    console.log(socket.id);
    
    //---------------接收client
    socket.on('test',(username,password)=>{
        console.log(username+"    "+password);
        if(lgandrgcheck.rgcheck(username,password)){
            //返回輸入成功並跳入另一個頁面
            console.log("yes")
            io.emit("suc",username)
        }else{
            console.log("no")
            //socket.emit('fail',{some:false})
            //返回輸入錯誤訊息
        }
    })
        

   /* socket.on('getusername',data=>{
        getusername = data
        console.log(getusername)
    })
    socket.on('getpassword',data=>{
        getpassword = data
        console.log(getpassword)
    })
    */

    //---------------發送client
    

})



//目前進度 crud ，如何讀取判斷空值


