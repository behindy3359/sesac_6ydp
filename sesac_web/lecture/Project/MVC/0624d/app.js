const express = require('express');
const app = express();
const portNo = 8080;

app.set('view engine', 'ejs');
app.set('views', './views'); 
app.use(express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// [라우터 분리]
const indexRouter = require('./routes'); // index는 생략 가능!
app.use('/', indexRouter); // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// [404 error] 맨 마지막 라우트로 선언 -> 나머지 코드 무시되기 때문!!
app.get('*', (req, res) => {
  res.render('404');
});

let now =Date();
console.log(now);

app.listen(PORT, () => {
  console.log(`${portNo}에서 서버 실행중! ${Date()}`);  
});
