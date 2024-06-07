// http : NodeJs 내장 모듈
// 내장 모듈을 활용하여 서버 만드는 기능을 사용해 보자
// console.log(http); 내장객체 확인

const http = require('http');
console.log(http);
const server = http.createServer();

server.listen(8000, function(){
    console.log(' 서버 실행 ');
});


