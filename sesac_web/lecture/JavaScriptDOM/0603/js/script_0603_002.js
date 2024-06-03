// // js 표준 내장 객체
// // - 기본적으로 미리 정의된 객체
// // - 모든 js 환경에서 사용할 수 있는 내장 객체들을 말한다.
// // - 자주 사용되는 기능을 미리 구현해둔 것
// // #1. Date 객체 : 시간 , 날짜
// // 날짜 생성하여 저장.
// let now = new Date();
// console.log( now );

// // new Date( timestamp ) - 1970년 1월 1일을 기준으로 경과한 밀리초( ms )를 나타내는 정수
// // 에포크( 특정 시간의 기준점 ) 이후의 시간을 나타낸다  
// // 1970년 1월 1일 - 
// let jan_01_1970 = new Date( 0 );
// console.log( jan_01_1970 );
// console.log( ( now - jan_01_1970 ) );

// let date = new Date(`2024-06-03`);
// console.log( date );

// // month 부분은 0이 1월 로 계산
// let date2 = new Date('2024','05','05');
// console.log( date2 );

// // Date 관련 메서드
// // getDate() : 월의 몇번째 날인지 반환
// // getDay() : 주의 몇번째 날인지 반환 , zero-based numbering
// // getMonth() : 달의 몇번째 날인지 반환 , zero-based numbering
// // getHours() : 시간을 반환 , ( 0 ~ 23 )
// // getMinutes() : 분을 반환 , ( 0 ~ 59 )
// // getSeconds() : 초를 반환 , ( 0 ~ 59 )
// // getMiliseconds(): 밀리초를 반환 ( 0 ~ 999 )
// // getTime() : 1970/1/1 로부터 경과한 시간을 반환

// console.log(now.getTime());
// console.log(now.getFullYear());
// console.log(now.getMonth()+1+'월');
// console.log(now.getDate());
// console.log(now.getHours());
// console.log(now.getMilliseconds());
// console.log(now.getMinutes());
// console.log(now.getSeconds());
// console.log(now.getDay());
// console.log('-----------------------절--취--선-----------------------------');

// // Math 객체
// // 수학적인 함수

// // 속성 -
console.log( Math.PI );
console.log( Math.E );
console.log( Math.SQRT2 );
// console.log(Math.min(100,-2,0,5));

// console.log(Math.random()); // 0<= Math.random() < 1
// console.log(Math.floor(Math.random()*10 + 1)); // 1<= Math.random() <= 10 ;
// console.log(Math.floor(Math.random()*11));


// Q1) 1 ~ 100
// Q2) 20 ~ 22

let iAmNumber = Math.random(); // 난 수!

console.log('Q1 : ' , Math.floor( iAmNumber * 100 + 1 ));
console.log('Q2 : ' , Math.floor( iAmNumber * 3 + 20 ));