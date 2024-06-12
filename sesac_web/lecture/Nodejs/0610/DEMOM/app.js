const http = require('http');
const fs = require('fs');
const url = require('url');
let nowPort = '1234';

//127.0.0.1:3000에서 winter.html , summer.html

//http.createServer().listen()
//http.createServer().listen(portNumber, ()=>{ 출력확인용 log출력문 작성 })
//http.createServer(()=>{}).listen(portNumber, ()=>{ 출력확인용 log출력문 작성 })



http.createServer((req, res)=>{
    let qUrl = url.parse( req.url, true );
    console.log('qUrl : ' + qUrl);
    let filename = '.'+qUrl.pathname;
    
    console.log(filename);
    
    
    fs.readFile(filename, (err, data)=>{
        if (err){
            res.writeHead(404,{'content-type':'text/html'});
            console.log(err);
            return res.end('404 file not found : 페이지가 존재하지 않습니다!')
        }else{
            res.writeHead(200,{'content-type':'text/html'});
            res.write()
            console.log('data :' + data);
        }
        return res.end();
    });

}).listen(nowPort, ()=>{
    console.log('서버를 열겠습니다! port on :' + nowPort);
});
