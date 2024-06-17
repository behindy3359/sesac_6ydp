/** express 모듈을 가져오기 */
const express = require('express');
/** express 애플리케이션 객체 생성 */
const app =express();
/** 서버가 실행될 포트 번호 */
const portNo = 8080;

/** 뷰 엔진이 ejs임을 선언, 다양한 뷰엔진이 존재함 */
app.set('view engine','ejs');
/** 뷰를 가져올 디렉토리를 설정 */
app.set('views', 'views');
app.use(express.urlencoded({extended : true})); // urlencoded로 파싱된 body를 요청, post요청으로 들어오는 모든 형식의 데이터를 파싱함
app.use(express.json()); // 요청의 body 객체에 json 형태로 전달하겠다는 뜻
/** 스타일, 기능을 표현할 파일들을 가져올 디렉토리를 설정 , 미들웨어 지정*/
app.use(express.static('public'));


/** localhost:portNo/ 로 접속했을 때, index를 보여주겠다고 말함 */
app.get('',(req,res)=>{
    res.render('index',{
        title: 'index',
    });
})

app.post('/pF',(req,res)=>{
    res.render('result',{
        reqMethod: 'post',
        userInfo : req.body,
        title: 'result',
    });
})

app.get('/gF',(req,res)=>{
    console.log(req.query);
    res.render('result',{
        reqMethod: 'get',
        userInfo : req.query,
        title: 'result',
    });
})

/** listen(포트번호, 실행됐을때 확인용 출력문); 서버 시작 메서드 */
app.listen(portNo,()=>{
    console.log(portNo + '에서 서버 실행중 '+ Date());
})