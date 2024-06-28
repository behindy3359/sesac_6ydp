const express = require('express');
// const mainMiddleWare = require('./middleware/mainMiddleware');
const router = require('./routes/router');
const app = express();
const portNo = 8080;
const {sequelize} = require('./models');



app.set('view engine','ejs');
app.set('views','views');


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/', router);

sequelize
  //force : true ;서버 실행마다 테이블을 재 생성
  //
  .sync({ force: false })
  .then(()=>{
    app.listen(portNo, ()=>{
      console.log(`Database Connection succeeded!`);
      console.log(`server start... [port : ${portNo}] [Time : ${Date()}]`);
    });
  })
  .catch((err)=>{
    console.error(err);
  });


//404 핸들링
// app.get('*',(req,res)=>{
//   res.render('404', {title : '죄송합니다! 페이지를 찾을 수 없습니다.'});
// })
