const http=require('http'); 

// create the server & (logic)
const server=http.createServer((req,res)=>{
    // logic
    if(req.url==="/"){
        res.end("welcome to Home Page");
    }else if(req.url==="/login"){
        res.end("fill the login credentials");
    }else if(req.url==="/register"){
        res.end("Register your restaurant here! ");
    }
})

// run the server
server.listen(1000,()=>{
    console.log("Server is running Sucessfully! at port number 1000");
})