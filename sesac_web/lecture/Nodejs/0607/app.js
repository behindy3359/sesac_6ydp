const http = require('http');
http.createServer(function(req,res){
    //send http,
    // http status, 200은 정상적인 웅답
    // Content-Type : text / plain
    res.writeHead( 200 ,{'x-content-type' : 'text/plain'});
    res.end(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <span style="color: red;"> Hello World </span>
    </body>
    </html>
    `);
    res.writeHead( 200 ,{'x-content-type' : 'text/html'});
    res.end(`
    `);
    

}).listen(8080, () =>{
    console.log( '내놔! on 8080' );
});