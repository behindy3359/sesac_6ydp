// promise ( 프로미스 ) 객체
// - 비동기 처리하기 위한 첫번째 방법이 콜백하뭇 인데, 콜백 지옥이라는 치명적인 단점이 있음
//   이 단점을 해결하기 위해서 es6부터 등장한 문법
// - 미래에 실패/성공에 대한 결과값을 '약속'한다는 의미
// - 어떤 작업에 대해 성공( resolve ) - then , 실패( reject ) - catch 분리해서 반환
//
//

// /**
//  * promise 를 생성하는 코드 '제작 코드 ( producing code )'
//  * @flag { } flag 
//  * @returns - flag에 따라 resolve || reject 를 반환 
// */
// function promiseFunc(flag){ // 분기처리를 해야할 때 사용 , boolean 값에서 

//     /**실행함수 ( executor ) 가 두개의 콜백함수 ( rej , res )를 받는다.
//      * 
//     */
//     return new Promise(function(resolve,reject){
//         if(flag){
//             resolve(`프로미스 이행( fulfilled )상태! 성공${ flag }`);
//         }else{
//             reject('프로미스 거절( rejected ) 상태ㅠ 실패'+flag);
//         }
//     });
// }

// // promise 를 소비하는 코드 '소비코드 ( comsuming code )'

// promiseFunc( 5 > 3 )
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });


let product;
let price;
let myWallet = 5000;

function goMart(){
    console.log( 'goMart 실행' );
}

/** CBF : call back function
 *  
 */
function promisePickDrink() {
    return new Promise((res, rej)=>{
        setTimeout(()=>{
                
            console.log('고민끝');
        
            product = '제로콜라';
            price = 2000;
            if(myWallet> price){
                res();
            }else{
                rej();
            }
        },3000)
    })
}
function permitPay() {
    console.log('결제 완료,'+'상품명 : '+product+'가격:'+price);
}
function rejectPay() {
    console.log('거절되었습니다.');
}


// goMart();
// promisePickDrink().then(permitPay).catch(rejectPay);

// 프로미스 체이닝
// 목표, 함수를 이용해 (4+3)*2 -1 을 완성해 보자
// => sub(mul(add(4,3),2),1) : add -> mul -> sub
//
// function add(n1, n2, callback) {
//     setTimeout(function(){
//         const result = n1 + n2 ;
//         callback(result);
//     },1000);
// }
// function mul(n , callback){
//     setTimeout(function(){
//         const result = n * 2;
//         callback(result);
//     },700);
// }
// function sub(n, callback){
//     setTimeout(function(){
//         const result = n - 1;
//     },500);
// }
function adddd(n1,n2){
    return n1+n2;
};

function muldd(n1,n2){
    return n1*n2;
}
function subdd(n1,n2){
    return n1-n2;
}


// console.log(
//     sub(mul(add(4,3),2),1)
// );
// 프로미스 체이닝 (Promise Chaining)
// 목표: 함수를 이용해 (4 + 3) * 2 - 1 을 연산해보자
// => sub(mul(add(4, 3), 2), 1) : add -> mul -> sub

// i) 콜백함수를 이용해 처리한 경우
// function add(n1, n2, callback) {
//     setTimeout(function () {
//         const result = n1 + n2;
//         callback(result);
//     }, 1000);
// }

// function mul(n, callback) {
//     setTimeout(function () {
//         const result = n * 2;
//         callback(result);
//     }, 700);
// }

// function sub(n, callback) {
//     setTimeout(function () {
//         const result = n - 1;
//         callback(result);
//     }, 500);
// }

// add(4, 3, function (x) {
//     console.log(x); // 예상값: 7

//     mul(x, function (y) {
//         console.log(y); // 예상값: 14

//         sub(y, function (z) {
//             console.log(z); // 예상값: 13
//         })

//     })
// })

// ii) 프로미스 체이닝을 이용한 경우
function add(n1, n2) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n1 + n2; // 7
            resolve(result); // resolve(7)
        }, 1000);
    })
}

function mul(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n * 2; // 14
            resolve(result); // resolve(14)
            // reject(new Error('의도적으로 발생시킨 에러입니다!'));
        }, 700);
    })
}

function sub(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            const result = n - 1; // 13
            resolve(result); // resolve(13)
            // reject(new Error('의도적으로 발생시킨 에러입니다!'));
        }, 500);
    })
}


// 프로미스의 실행문
// add(4, 3)
//     .then(function (result) {  // 7
//         console.log(result); // 7

//         return mul(result); // return mul(7)
//     })
//     .then(function (result) { // 14
//         console.log(result); // 14

//         return sub(result); // return sub(14)
//     })
//     .then(function (result) { // 13
//         console.log(result); // 13
//     })
//     .catch(function (error) {
//         console.log(error);
//     })

// async ,await 의 사용

async function exec(){
    try{
        goMart();
        await promisePickDrink();
        permitPay();
    }catch(err){
        rejectPay();
    }
}
exec();


