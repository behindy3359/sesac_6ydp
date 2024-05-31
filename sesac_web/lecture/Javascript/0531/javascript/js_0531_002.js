// fot 문의 형태
// 형태!
// for ( 초기화 ; 조건 ; 증감 ){
//     실행문;
// }
//ex)
    // for( let count = 0; count <10 ; count++ ){
    //     console.log('인사를',+count+1+'번째 하는중!');
    // }
// for 문의 중첩
//

//1~5 까지 출력
// for ( i = 0 ; i < 5 ; i++ ){
//     console.log(`${i+1}`);
// };
// console.log('-------------------------------');
// for( j = 5 ; j != 0 ; j-- ){
//     console.log(`${j}`);
// };
// console.log('-------------------------------');
// //1~n까지의 합
// let sum = 0;
// let untilIndex = Math.floor( Math.random() * 100 );
// for( k = 1 ; k <= untilIndex; k++ ){
//     sum+=k
//     console.log( `${k}th sum : ${sum}`);
// };
// console.log(`0~${ untilIndex }까지의 정수들의 합! : ${ sum }`);

//1~20까지의 숫자 반복, 1~20중에서 짝수들의 합을 구하기

// let sum = 0;
// for( let i = 1 ; i <= 20 ; i++ ){
//     if( i % 2 === 0 ){
//         sum += i;
//         console.log( sum );
//     }
// }
// console.log( ' 총합 ! 님! : '+sum );

// let count = 0;
// while( count < 10 ){
//     console.log(`${ count + 1 }번째 인사를 하는중!`);
//      count ++
// }

// console.log('-------------------------------');

// let count2 = 0;
// while ( true ){
//     // 루프를 빠져나오게 조건을 걸어주기 ;
//     if( count2 == 10 ){
//         break;
//     }
//     console.log(`${ count2 + 1 }번째 인사를 하는중!`);
//     count2++ ;
// } console.log('-------------------------------');


//구구단 쓰기!
// for( i = 1 ; i < 10 ; i++ ){
//     console.log( `${ i }단 !`);
//     for( j = 1 ; j < 10 ; j++ ){
//         console.log(` ${ i } X ${ j } = ${ i * j }`);
//     }
// }
//while문으로 쓰기
let bDan = 1; // before Dan (구구 '단' )
let aDan = 1; // after Dan 
while( bDan < 10 ){
    console.log( `${ bDan }단 !`);
    while( aDan < 10){
        console.log(` ${ bDan } X ${ aDan } = ${ bDan * aDan }`);
        aDan++;
    }
    aDan = 1;
    bDan++;
}