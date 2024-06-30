const express = require('express');
const mainMiddleWare = require('./middleware/mainMiddleware');
const mainRouter = require('./router/mainRouter');
const portNo = 8080;
const app = express();

//미들웨어 연결
mainMiddleWare.mainMiddleWare(app);

//404 핸들링
app.get('*',(req,res)=>{
  res.render('404', {title : '죄송합니다! 페이지를 찾을 수 없습니다.'});
})

app.listen(portNo, ()=>{
  console.log(`server start... [port : ${portNo}] [Time : ${Date()}]`);
})