// // 배열에서 반복문 사용하기
// // - 기본 for 문
// // - for of  문
// // - forEach() 메서드

// // 배열 ) for 문을 사용 이유
// const fruits =['apple', 'oragne', 'grape', 'banana', 'peach', 'melon'];
    
// // for(let f = 0; f < fruits.length ; f++ ){
// //     console.log( fruits[f] );
// // }
// // console.log('절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선');
// // for( let frFriend of fruits ){
// //     console.log( frFriend );

// const alphaAlphabet = 'alphabet'.split('');

// console.log(alphaAlphabet);


// for( let a = 0 ; a < fruits.length ; a++ ){
//     console.log( fruits[ a ] );
// } 

// console.log('절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선');

// for( let frFriend of fruits ){
//     console.log( frFriend );

// }

// console.log('절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선');

// alphaAlphabet.forEach( function ( alpha ) {
//     console.log( alpha );
// });

// console.log('절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선절취선');

// alphaAlphabet.forEach( function ( a, b , c ) {
//     // a - currentValue, 반복하고있는 현재 요소
//     // b - currentValue의 index
//     // c - currentValue가 속한 배열
//     console.log( a, b , c);
// });

// // map, filter, find 메서드
// // - 조건에 따라 요소를 변형하거나 선택
// // #1. map ()
// // - 배열의 각 요소에 대해 지정된 함수를 호출하고, 그 결과로 새로운 배열을 생성.

const numbers = [
    [
        [1,2,3,4], //a[0]
        [5,6,7,8],//a[1]
        [9,10,11,12]//a[2]
    ],
    [  
        [13,14,15,16],//a[3]
        [17,18,19,20],//a[4]
        [21,22,23,24]//a[5]
    ]
];


// ????

let dNumbers = numbers.map( function( a ){
    let dDDDNumbers = a.map( function( b ) {
        let dDDDDDDDDNumbers = b.map( function(c){
            return c * 2;
        })
        return dDDDDDDDDNumbers;
    })
    return dDDDNumbers;
})
console.log(dNumbers);







// const dog = {
//     name : '태풍',
//     gender : 'M',
//     info : 'cool'
// }

// for(let key in dog){
//     console.log(key, dog[key]);
// }