const multer = require('multer');

// 업로드 준비! 
exports.uploadSetup = multer({
  storage:multer.diskStorage({
    // 저장 경로 설정
    destination(rq,file,done){
      done(null,'public/uploads/');
    },
    // 파일 이름 설정, 확장자 포함
    filename(rq,file,done){
      done(null, file.originalname);
    } 
  })
})