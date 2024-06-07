const http = require('http');
const fs = require('fs');

const server = http.createServer(( req, res )=>{
    let path = "./views/"
    switch (req.url){
        
        // Home
        case '/' :  
            path += 'index.html';
            res.statusCode = 200;
            break;
        // About
        case '/about' :
            path += 'about.html';
            res.statusCode = 200;
            break;

        // 404 
        default :
            res.statusCode = 404;
            break;
    }
    fs.readFile(path,( err, data )=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }
    })
});

server.listen( 8000, ()=>{
    console.log('8000 포트에서 서버 실행');
});