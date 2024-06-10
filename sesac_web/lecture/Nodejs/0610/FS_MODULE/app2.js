const fs = require('fs');

//삭제하기!
// fs.unlink('newfile2.txt',function () {
//     console.log('삭제완료');  
// })

//파일 이름 변경 

fs.rename('newfile.txt', 'upgradedfile.txt',function (err) {
    if(err) throw err;
    console.log('이름 변경 완료');    
});


