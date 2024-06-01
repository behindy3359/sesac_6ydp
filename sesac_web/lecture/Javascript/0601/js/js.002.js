// 내장 메소드 실습

// - 내장 메소드 실습문제2
let fruits1 = ["사과","딸기","파인애플","수박","참외","오렌지","자두","망고"];
let fruits2 = ["수박","사과","참외","오렌지","파인애플","망고"];
// # 1. 두 배열에서 동일한 요소만을 가지는 배열 same 만들기
// # 2. 두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기
let same = [];
let diff = [];

fruits1.forEach( i => {    
    if ( fruits2.includes( i ) ){
        same.push( i );
    }else{
        diff.push( i );
    }
});
console.log( same );
console.log( diff );

/* // - 내장 객체 실습 문제 1 - 주말과 평일

let yoil = 4;
// if
if( yoil < 5 ){
    console.log( '평일' )
}else{
    console.log( '주말' )
}
// switch
switch( true ){
    case  ( yoil < 5 ) : console.log( '평일' ); break;
    default : console.log( '주말' ) ; break;
}
// 삼항연산자
yoil < 5 ? console.log( '평일' ) : console.log( '주말' );

// - 내장 객체 실습 문제 1 - 난수 생성
let iAmNumber = Math.floor((Math.random())*11);
console.log(iAmNumber);
 */