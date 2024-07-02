const express =require('express');
const cookieParser = require('cookie-parser');
const dotenv =require('dotenv');
const path = require('path');
const middleware = require('./middleware/etc');

dotenv.config({
  path: path.resolve(__dirname, '.env'),
}); 

const cookieConfig = {
  httpOnly : false,  
  maxAge : 60 * 1000, 
  signed : true, 
}
const secretKey = process.env.COOKIE_SECRET;
const port = process.env.PORT; 
const app = express();

middleware.etcMiddle(app);

app.use(cookieParser(secretKey) );

app.post('/setCookie',(req,res)=>{
  console.log('/setCookie 요청이 들어옴!');
  res.cookie('todayCheck', req.body.result, cookieConfig);
  res.send('Cookie set successfully');
});

//처음 페이지를 불러오는 요청시 쿠키를 체크하게 함
app.get('/', (req,res)=>{
  res.render('index',{cookieCheck : req.signedCookies.todayCheck});
});

app.listen(port,(req,res)=>{
  if(port == null||secretKey == null){
    console.log('.env 설정을 확인해주세요');
  }
  console.log(`${port}에서 서버  실행중${Date()}`);
})
