const pathInVal = require('path');
const fsInVal = require('fs');

fsInVal.mkdir(( pathInVal.join(__dirname,'demo') ), (err)=>{
    if(err){
        console.error(err);
    }else{
        console.log('생성완료!');
    }
})





