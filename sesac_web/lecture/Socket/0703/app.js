const { log } = require('console');
const express = require('express');
const http = require('http');
// node.js 기본 내장 모듈인 'http' 불러오기.
// 'http' 모듈은 HTTP 서버와 클라이언트 기능을 제공.

const socketIO = require('socket.io');
// 'socket.io' 모듈 불러오기.
// WebSocket 기반, 실시간 양방향 데이터 전송 지원 라이브러리.

const app = express();
const server = http.createServer(app);
// Express 애플리케이션 기반으로 HTTP 서버 생성.

const io = socketIO(server)
// HTTP 서버 'server'를 'socket.io'에 바인딩하여 WebSocket 기능을 추가한 서버를 생성.
// 이러면 클라이언트-서버 간에 실시간 양방향 통신을 할 수 있음.

const PORT = 8080;

app.set('view engine', 'ejs');
app.set('views','views')
app.get('/', (req, res) => {
  res.render('socket');
})

const nickObject = {};

// io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  // connection 이벤트는 클라이언트가 접속 했을 때 발생
  console.log('서버 연결 완료 :: ', socket.id);
  // socket.id : 소켓 고유 아이디 (브라우저 탭 단위)
  socket.on('request',(data)=>{
    console.log(data);
    console.log(`${socket.id}가 보냄${data.msg}`);
    socket.emit('answer', {who: socket.id , msg: data.msg});
  })
  // 서버에 접속된 모든 클라이언트에게 전송
  io.emit('notice',`${ socket.id}님이 입장하셨습니다.`);
  socket.on('setNick',(data)=>{
    console.log(`닉네임 설정 완료 : ${data}`);
  });
})


server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})
