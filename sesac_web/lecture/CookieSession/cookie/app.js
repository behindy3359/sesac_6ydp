const express = require('express');
const dotenv = require('dotenv');
const path =require('path');
const cookieParser = require('cookie-parser');

dotenv.config({
  path: path.resolve(__dirname, '.env'),
});

const app = express();
const port = process.env.PORT;
const secretKey = process.env.COOKIE_SECRET;

const cookieConfig = {
  httpOnly : true,  // 웹 서버를 통해서만 쿠키에 접근하게 가능하는 설정 -> frontend javascript 에서의 접근을 차단
  maxAge : 60 * 1000, // 쿠키 수명( 1분 , ms 단위 )
  // expires : 만료 날짜 /시간을 지정 가능 
  signed : true, // 쿠키의 암호화를 하겠다! (req.signedCookies)
  // secure : 웹 브라우저와 웹 서버가 https통신하는 경우만 쿠키를 서버에 전송
}

app.set('view engine','ejs');
app.set('views','views');

app.use( cookieParser(secretKey) );

app.get('/',(req,res)=>{
  res.render('cookie');
})

app.get('/setCookie',(req,res)=>{
  // res.cookie(키, 값, 옵션)
  // : 쿠키를 설정하는 메서드 != 서버가 클라이언트에 응답하는것과 다르다.
  res.cookie('myKeyTest','myValueTest',cookieConfig);
  //클라이언트에 응답하기
  res.send('Set signed Cookie!');
});

app.get('/getCookie',(req,res)=>{
  // req.signedCoolies
  // : cookie-parser가 만든 요청의 서명된 쿠키 해석
  // 
  res.json(req.signedCookies);
});
app.get('/clearCookie',(req,res)=>{

  // res.clearCookie(키, 값, 옵션)
  // : 쿠키를 설정하는 메서드 != 서버가 클라이언트 응답
  // : 쿠키를 생성할 때의 키, 값, 옵션이 일치해야함 !!(단, maxAge/expires 키는 일치할 필요 없음)
  res.clearCookie('myKeyTest','myValueTest',cookieConfig)
  res.send('Clear Signed Cookie')
});

app.listen(port ,()=>{
  console.log(`${port} 에서 실행중 ${Date()}`);
})

// session ?
// 웹 서버에 저장되는 쿠키
// 사용자가 웹 브라우저를 통해 접속한 시점부터 연결을 끝내는 시점까지의 시간동안 일련의 요구를 하나의 상태로 보고 그 상태를 유지시킨다.

//cookie-parser
//:요청에 실려온 쿠키를 해석해서 req.cookies 객체로 만듦
// 쿠키의 생성, 조회, 삭제등에 관여


// cookieParser(secretKey, optioObj)
// - secretKey 비밀 키
//    - 비밀 키의 값을 통해 해당 쿠키가 이 서버가 만든 쿠키임을 검증
//    - 쿠키는 클라이언트에 저장되는 정보이다 보니 위조가 쉬워서 비밀키를 통해 만든 서명을 쿠키 뒤에 붙임
// - optionObj
//    - 