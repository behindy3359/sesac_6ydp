const http = require('http');
const url = require('url');
const fs = require('fs');
const portNo = 8080;


http.createServer((req,res)=>{
    let qUrl = url.parse( req.url , true );
    let filename = '.'+qUrl.pathname;

    fs.readFile(filename,(err, data)=>{
        if (err) {
            console.log(err);
            res.writeHead(404,{'content-type':'text/html'});
            res.end('404 file not found : 페이지가 존재하지 않습니다!');
        }else{
            console.log(err);
            res.writeHead(200,{'content-type':'text/html'});
            res.write(data);
        }
        res.end();
    })
}).listen(portNo, ()=>{
    console.log( portNo +'번 포트에서 서버를 열겠습니다.' );
});