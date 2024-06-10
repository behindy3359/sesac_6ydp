const fsVal = require('fs');
const pathVal = require('path');

// console.log(fsVal);
// fsVal.mkdir( pathVal.join(__dirname,'test'), (err)=>{
//     if(err){
//         return console.error(err);
//     }else {
//         console.log('디렉토리 생성 완료!!');
//     }
// });

console.log(fsVal);
fsVal.rmdir( pathVal.join(__dirname,'test1'), (err)=>{
    if(err){
        return console.error(err);
    }else {
        console.log('디렉토리 삭제 완료!!');
    }
});


