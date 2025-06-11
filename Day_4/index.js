const http = require('http');
const fs=require('fs')

// create server
const server=http.createServer((req,res)=>{
    // logic of server(bunch of conditional statment)
    if(req.url==="/"){
        res.end("Home Page");
    }else if(req.url==="/reports"){
        res.end("report data");
    }else if(req.url==="/data"){
       fs.readFile("./data.json","utf-8",(err,data)=>{
        if(err){
            res.end(err);
        }else{
            res.write("following is the User data that you requested \n");
            res.end(data);
        }
       })
    }else if(req.url==="/blogs"){
        res.end("this is blog data");
    }else if(req.url==="/chai"){
        res.end("chai paga");
    }else{
        res.end("404 RESPONSE NOT FOUND")
    }
});

// run the server
server.listen(5000,()=>{
    console.log('server is running in port num 5000');
});