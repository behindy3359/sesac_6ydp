const express = require('express');
const path = require('path');
const portNo = 8080;
//MVC 분리를 위한 라우터 설정
const mainRouter = require('./router/mainRouter');
// 미들웨어 분리
const {setupMiddleware} = require('./middleware/main_middleware')

const app = express();

app.set('view engine','ejs');
app.set('views','views');

setupMiddleware(app);

app.use('/',mainRouter);

app.get('*',(req,res)=>{
  res.render('404');
})
app.listen(portNo,()=>{
  console.log(`server Open : ${portNo},  ${Date()}`);
})