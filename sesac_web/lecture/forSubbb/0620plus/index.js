const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const portNo = 8080;

app.set('view engine','ejs');
app.set('views','views');

// 요청이 들어올 때 마다, 모든 요청에 대해서 미들웨어가 실행.
app.use('/static', express.static('public'));
app.use('/skipUrl', express.static('public/uploads'));
app.use('/image', express.static(__dirname+'uploads'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// 업로드 준비! 
const uploadSetup = multer({
  storage:multer.diskStorage({
    // 저장 경로 설정
    destination(rq,file,done){
      done(null,'public/uploads/');
    },
    // 파일 이름 설정, 확장자 포함
    filename(rq,file,done){
      console.log(rq);
      const ext = path.extname(file.originalname);
      done(null,path.basename(file.originalname,ext)+ Date.now()+ext);
    }
  })
})
app.post('/signIn',uploadSetup.single('userImage'),(rq,rs)=>{
  const data ={
    file : rq.file,
    user : rq.body,
  }
  rs.send(data);
})

app.get('/',(rq,rs)=>{
  rs.render('index',{
    title : '흑흑 너무 어려워요',
  })
})


app.listen(portNo,()=>{
  console.log(`server Open : ${portNo},  ${Date()}`);
})