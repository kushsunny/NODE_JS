const http=require('http'); 
const fs=require('fs'); 

// create the server & logic 

const server=http.createServer((req,res)=>{
    // logic
    if(req.url==="/"){
        res.end("Home Page"); 
    }else if(req.url==="/nudge-out"){
        res.end("welcome to nudge-out page");
    }else if(req.url==="/nudge-in"){
        res.end("welcome to nudge-in Page");
    }else if(req.url==="/data"){
          fs.readFile("./prac2_Data.json","utf-8",((err,data)=>{
        if(err){
            res.end(err);
        }else{
            res.write("Following User Data - ");
            res.end(data);
        }
    }))
    }
});

// run the server

server.listen(2000,()=>{
    console.log("Server run at 2000");
})