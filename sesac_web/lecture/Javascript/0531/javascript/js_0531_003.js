let guguDan = 1; //
for( let i = 1 ; i < 10 ; i++ ){
    console.log(`--- ${ i }단 ---`);
    for( let j = 1 ; j < 10 ; j++ ){
        if( i == j ){
            break;
        }
        console.log(`${ i } X ${ j } = ${ i * j }`);
    }
}
// do ~ while 문

// let number;
// do{
//     number = parseInt( Math.random() * 20 );
// }while( number < 10 ){
    
// }

// break & continue
// 반복문에서 사용되는 제어문.
// #break
// for( let i = 1 ; i <= 10 ; i ++ ){
// 	if ( i === 5 ){
// 		break ;
// 	}
// 	console.log(i);
// } // 1, 2, 3, 4


// for(let i = 1 ; i<= 5; i ++ ){
// 	if ( i === 3 ){
// 		continue;
// 	}
// 	console.log(i);
// }// 1, 2, 4, 5

// for ( let i = 1 ; i <= 10000 ; i ++ ){
//     if( i % 13 === 0 ){
//         if( i % 2 === 0 ){
//             console.log( i );
//         }
//     }
// }
// let mamamamam = prompt( '숫자를 입력하렴!' );

// for ( let i = 1 ; i <= mamamamam ; i ++ ){
//     if( i % 13 === 0 ){
//         if( i % 2 === 0 ){
//             console.log( i );
//         }
//     }
// }

// let totalSum = 0;

// for( let i = 0 ; i <= 100 ; i ++ ){
//     if( i % 2 === 0 ){
//         totalSum += i;
//         console.log( totalSum );
//     }else if( i % 5 === 0 ){
//         totalSum += i;
//         console.log( totalSum );
//     }
// }
// console.log( totalSum );