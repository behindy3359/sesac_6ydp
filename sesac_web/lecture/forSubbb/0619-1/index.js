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

app.post('/fileSend',uploadDetail.single('thumbnail'), (rq,rs)=>{
  rs.send(rq.file);
})

app.get('/',(rq,rs)=>{
  rs.render('index', {title : '파일 업로드 하기!',});
})

app.listen(portNo , ()=>{
  console.log(`${portNo}에서 서버 실행중! ${Date()}`);  
})