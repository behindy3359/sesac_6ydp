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

//미들웨어 (Middleware)연결
// : 요청과 응답의 중간에서 작업함
// express 에서는 app.use();로 등록해줘야 함

/** 스타일, 기능을 표현할 파일들을 가져올 디렉토리를 설정 , 미들웨어 지정*/
app.use(express.static('public'));
// body-parser 모듈 사용할거야!
app.use(express.urlencoded({extended : true})); // urlencoded로 파싱된 body를 요청, post요청으로 들어오는 모든 형식의 데이터를 파싱함
app.use(express.json()); // 요청의 body 객체에 json 형태로 전달하겠다는 뜻

//라우팅 ( Routing ) -> 주소를 설정한다. 시작지점과 목적지점을 이어주는 과정
/** localhost:portNo/ 로 접속했을 때, index를 보여주겠다고 말함 */
app.get('',(req,res)=>{
    res.render('index',{
        title: '폼 실습하기! - index',
    });
})
app.get('/gF',(req,res)=>{ //gF - get Form

    //res.send() : 문자열, json, 파일 등을 클라이언트에게 응답 ( JSON을 주로 응답 ) => 서버가 데이터를 응답할 때 사용하는 메서드
    //res.render() : 템플릿 엔진을 사용해서 서버측에서 "동적으로" HTML을 생성하고 클라이언트에게 응답 => 서버측에서 동적으로 페이지를 렌더링할 때 render() 사용
    
    // res.send('get 요청 성공');
    console.log(req.query);
    res.render('result',{
        title: '폼 실습하기! - result(get)',
        reqMethod: 'get',
        userInfo : req.query,
    });
})
app.post('/pF',(req,res)=>{ //pF - post Form
    
    // res.send('post 요청 성공');
    console.log(req.body);

    res.render('result',{
            title: '폼 실습하기! - result(post)',
            reqMethod : 'post',
            userInfo : req.body,
    });
})

/** listen(포트번호, 실행됐을때 확인용 출력문); 서버 시작 메서드 */
app.listen(portNo,()=>{
    console.log(portNo + '에서 서버 실행중!'+ Date());
})