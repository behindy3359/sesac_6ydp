const express =require('express');
const session =require('express-session');
const cookieParser = require('cookie-parser');
const dotenv =require('dotenv');
const path = require('path');


const cookieConfig = {
  httpOnly : true,  // 웹 서버를 통해서만 쿠키에 접근하게 가능하는 설정 -> frontend javascript 에서의 접근을 차단
  maxAge : 60 * 1000, // 쿠키 수명( 1분 , ms 단위 )
  // expires : 만료 날짜 /시간을 지정 가능 
  signed : true, // 쿠키의 암호화를 하겠다! (req.signedCookies)
  // secure : 웹 브라우저와 웹 서버가 https통신하는 경우만 쿠키를 서버에 전송
}

dotenv.config({
  path: path.resolve(__dirname, '.env'),
}); 

const secretKey = process.env.COOKIE_SECRET;
const port = process.env.PORT; 
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views', 'views');
app.use('/public',express.static('public'));
app.use(cookieParser(secretKey) );



app.post('/setCookie',(req,res)=>{
  // res.cookie(키, 값, 옵션)
  // : 쿠키를 설정하는 메서드 != 서버가 클라이언트에 응답하는것과 다르다.
  res.cookie('todayCheck',req.body.result,cookieConfig);
  //클라이언트에 응답하기
});

app.get('/',(req,res)=>{
  res.render('index');
})

app.listen(port,(req,res)=>{
  console.log(`${port}에서 서버  실행중${Date()}`);
})
