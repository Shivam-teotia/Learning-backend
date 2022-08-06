const {Console}=require('console');
const fs = require('fs');
const http=require('http');
const port=8000;
const server=http.createServer((req,res)=>{
    console.log(req.url);
    /*res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>this is node js tutorial in one shot</h1> <p>lets rock the world of node</p>');*/
    res.writeHead(200,{'content-type':'text/html'});
    let filePath;
    switch(req.url){
        case '/':
            filePath='./profile.html';
            break;
        default:
            filePath='./404.html';
            break;
    }
    fs.readFile(filePath,(err,data)=>{
        if(err){
            console.log('error');
            return res.end('<h1>Error!!</h1>');
        }
        else{
            return res.end(data);
        }
    })

})
server.listen(port,(err)=>{
    if(err){
        console.log('error');
        return ;
    }
    console.log(`server is listening on port ${port}`);
})