const express = require('express');
const multer = require('multer');// multer 모듈 불러오기
const app = express();
let portNo = 8080;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
app.use('uploads', express.static(__dirname + '/uploads'));

const upload = multer({
  dest : 'uploads/',
});

app.get('/',(rq,rs)=>{
  rs.render('index', {title : '파일 업로드 하기!',});
})

app.listen(portNo , ()=>{
  console.log(`${portNo}에서 서버 실행중! ${Date()}`);  
})