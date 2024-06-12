const http = require('http');
const url = require('url');
const fs = require('fs');
let portNo = 3333;


http.createServer(((req, res)=>{
    let qUrl = url.parse( req.url, true );
    let filename = '.'+qUrl.pathname;
    
    fs.readFile(filename,(err,data)=>{
        
        if(err){
            res.writeHead(404, {'content-type':'text/html'})
            console.log(err);
        }else{
            res.writeHead(200, {'content-type':'text/html'})
            res.write( data );
        }
        res.end();
    })

})).listen(portNo ,()=>{
    console.log( 'portNo : ' + portNo );
});