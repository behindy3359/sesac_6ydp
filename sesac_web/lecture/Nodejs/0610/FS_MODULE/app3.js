const fs = require('fs');

fs.readFile('./upgradedfile.txt', function (err,data) {
    console.log('파일 읽기 시작');
    if(err) throw err
    console.log(data);
    console.log('파일 읽기 완료');
})