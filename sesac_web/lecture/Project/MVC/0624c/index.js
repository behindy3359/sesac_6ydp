const express = require('express');
const app = express();
/**포트 번호! */
let portNo = 8080;

app.set('view engine', 'ejs');
app.set('views', 'views');

// 요청이 들어올 때 마다, 모든 요청에 대해서 미들웨어가 실행.
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static('public'));

const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get('/',(rq,rs)=>{
  rs.render('index', {title : 'MVC 패턴 연습하기!',
    data : comments
  });
});

app.get('/comments',(rq,rs)=>{
  rs.render('comments', {title : '댓글 목록!',
    comments : comments
  });
});

// 콜론: 요청의 주소에서 변수를 사용하는 방법
app.get('/comments/:id',(rq,rs)=>{
  const commentId = rq.params.id;
  console.log(comments[commentId - 1]);
  
  // 존재하지 않는 아이디에 대해서 요청할 때 404로 보내버리기!
  if(!comments[commentId-1]){
    return rs.render('404');
  }
  rs.render('comment',{comment :comments[commentId]});
});
// 콜론: 요청의 주소에서 변수를 여러개 사용하는 방법
app.get('/comments/:id/:name',(rq,rs)=>{
  rs.send(rq.params);
});

//맨 마지막 라우트(주소) 로 선언 : 그렇지 않으면 나머지 뒤쪽에 연결한 라우팅( 주소를 설계하는 행위 )이 전부 무시됨!!!
app.get('*',(rq,rs)=>{
  rs.render('404');
});

app.listen(portNo , ()=>{
  console.log(`${portNo}에서 서버 실행중! ${Date()}`);  
});