const fsVal = require('fs');
const pathVal = require('path');
const httpVal = require('http');
const urlVal = require('url');

// url 모듈은 웹 주소를 읽어 온다. 읽어온 내용을 구문 분석하여 주소의 각 부분으로 나누고 객체로 변환한다.

// let addr = 'https://m.search.naver.com/search.naver?sm=mtp_hty.top&where=m&query=%EB%82%A0%EC%94%A8';
// let addr = 'https://m.search.naver.com/search.naver?sm=mtb_hty.top&where=m&ssc=tab.m.all&oquery=%EC%98%81%EB%93%B1%ED%8F%AC+%EB%A7%9B%EC%A7%91&tqi=iEjw6lqVbxVssM%2FSxCKssssssAs-340221&query=%EB%82%A0%EC%94%A8';

// let parts = urlVal.parse(addr, true);

// console.log(parts);
// console.log(parts.pathname);
// console.log(parts.search);

// let partsData = parts.query; //?year=2024&month=feb

// console.log(partsData);
// console.log(partsData.sm);//기존 쿼리에서 month에 해당하는 것만 출력 feb



httpVal.createServer( function ( req, res ) {
    let q = urlVal.parse( req.url, true )
    let filename = '.'+q.pathname;
    console.log(filename);

    fsVal.readFile( filename, function ( err, data ) {
        if( err ) {
            res.writeHead(404, { 'Content-type' : 'text/html' });
            return res.end( '404 not found' );
        }
        res.writeHead( 200, { 'content-type' : 'text/html' });
        res.write( data );
        return res.end();
    })
}).listen( 8000, () => {
    console.log( '8000서버 실행' );
})



//과정 따라가 보기