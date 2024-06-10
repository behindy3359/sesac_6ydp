const fs = require( 'fs' );
const path = require( 'path' );


// fs.readdir( './', function ( err, files ) {
//     if ( err ) {
//         console.log ("에러", err );
//     } else{
//         console.log( "결과", files );
//     };
// });


// fs.writeFile( 'newfile.txt', `helloworld`, function(err){
//     if(err) throw err;
//     console.log('아무튼 생성됨');
// });


// //open(), w를 이용해서 파일 생성
// fs.open('newfile2.txt','w', function (err,file) {
//     if(err) throw err;
//     console.log('생 성 했 다 ');
// })

// // 파일 생성 appendFile() 추가, 기존 파일이 존재함을 전제로, 기존파일의 내용에 추가함

// fs.open('help.csv','w',function (err) {
//     if(err) throw err;
//     console.log('생성됨');
// })

fs.appendFile('newfile.txt','살려주세요!,도와주세요!',function (err) {
    if(err) throw err;
    console.log('파일에 추가됨!');
})
