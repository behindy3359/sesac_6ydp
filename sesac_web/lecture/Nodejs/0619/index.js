const express = require('express');
const multer = require('multer');// multer 모듈 불러오기
const path = require('path');
const app = express();
/**포트 번호! */
let portNo = 8080;

app.set('view engine', 'ejs');
app.set('views', 'views');


// 요청이 들어올 때 마다, 모든 요청에 대해서 미들웨어가 실행.
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/static', express.static('public'));
app.use('/image', express.static(__dirname + '/uploads'));
/** multer 세부 설정
 *  경로 뿐 아니라 파일명, 크기 등을 직접, 제어, 지정하고 싶다?
 *  
*/
const uploadDetail = multer({
  storage: multer.diskStorage({
    /** 저장 경로 설정 */
    destination(rq, file, done){
      done(null, 'public/uploads/');
    },
    /** 파일 이름 설정, 확장자 포함 */
    filename( rq, file, done ){
      const ext = path.extname( file.originalname );
      done(null, path.basename( file.originalname, ext ) + Date.now() + ext );
    }
  }),
  /**업로드 크기 제한 */
  limits:{ fileSize: 5 * 1024 * 1024 }
})
app.post('/dynamicFile',uploadDetail.single('thumbnail'), (rq,rs)=>{
  rs.send(rq.file);
})
//single()의 매개변수로, <input>태그의 name을 넣는다.
app.post('/upload/single', uploadDetail.single('userfile1'), (rq,rs)=>{
  console.log(rq.body); // {title : 작성한 제목!}
  console.log(rq.file); //
  // 지정된 디렉토리에 업로드된 파일이 생성, 확장자 없이 파일명이 자동으로 저장됨, 별도로 확장자를 지정해주면 업로드 때의 이미지를 확인할 수 있음
  rs.render('result',{
    title: 'result',
    fileName : rq.file.filename,
    fileTitle : rq.body.title,
  })
  console.log(rq.file.filename);
})
//여러 파일을 하나의 인풋에 전부 업로드할때, 배열 형태로 보여짐
app.post('/upload/multi',uploadDetail.array('userfile2'),(rq,rs)=>{
  console.log(rq.files); //
  console.log(rq.body); // {title : 작성한 제목!}
  // 지정된 디렉토리에 업로드된 파일이 생성, 확장자 없이 파일명이 자동으로 저장됨, 별도로 확장자를 지정해주면 업로드 때의 이미지를 확인할 수 있음
  rs.send("upload 완료");
})
// 여러 파일을 각각의 인풋에 업로드 할 때! 필요
app.post('/upload/fields', uploadDetail.fields([{name: 'userfile3'},{name: 'userfile4'}]), (rq,rs)=>{
  console.log(rq.body);
  console.log(rq.files);
  rs.send("upload 완료")
})

app.get('/',(rq,rs)=>{
  rs.render('index', {title : '파일 업로드 하기!',});
})

app.listen(portNo , ()=>{
  console.log(`${portNo}에서 서버 실행중! ${Date()}`);  
})