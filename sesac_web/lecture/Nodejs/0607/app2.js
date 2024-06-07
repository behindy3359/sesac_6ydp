const http = require('http');
http.createServer(function(req,res) {
    res.writeHead(200, {'x-Content-Type':'text:plain'});
    res.end(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h2 style="color:red;"> hello worlds </h2>
    </body>
    </html>
    `);
    
}).listen(3000,()=>{
    console.log('서버 열림!');
});
