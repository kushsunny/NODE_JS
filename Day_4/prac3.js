const http=require('http'); 
const fs=require('fs'); 

// creating the server 

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Home Page');
    }else if (req.url==='/feature'){
        res.end('Feature Section page');
    }else if(req.url==='/data'){
         fs.readFile('./data.json','utf-8',((err,data)=>{
            if(err){
                res.end('!error');
            }else if(data){
                res.write('This is the whole Data - \n');
                res.end(data);
            }
         }))
    }
})


// running the server 

server.listen(7000,()=>{
    console.log('server is running on Port No 7000');
})