// 비동기 처리의 3번째 방법 : async / await

// async 키워드 : 함수 앞에 작성
// => async를 붙이는 순간 해당 함수는 프로미스가 아닌 값을 반환하더라도 프로미스로 감싸서 반환


// /** 항상 1을 반환? async 키워드가 붙으면, 반환객체를 항상 promise로 감싸준다 */
// async function f1(){
//     return 1;
// }

// async function f2(){
//     return Promise.resolve(2);
// }
// /** async keyword with arrow function */
// const f3 = async ()=>{
//     return 3;
// }

// console.log(`f1() 실행 : ${f1()}`);  //  Promise{1}
// console.log(`f2() 실행 : ${f2()}`);  //  Promise{<pending>}

// f1().then(function(res){
//     console.log(res);
// })
// f2().then(function(res){
//     console.log(res);
// })

// async, await 같이 사용
// await : 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기르 ㄹ기다림
// - await 뒤에는 프로미스가 오게됨
// async 키워드를 사용한 함수에서만 await를 사용 가능 

function fetchFruits(){ // 뭔가를 가지고 온다 -> fetch ~, get ~ 를 활용
    return new Promise( function (res, rej){
        setTimeout(function(){
            const fruits = ['🍓','🍊','🍌','🍉','🍇','🍎'];
            res(fruits);
        }, 100);
    })
}

// fetchFruits()
//     .then(function(f){
//         console.log(f);
//     });

function fetchFlags(){

    return new Promise(function(res,rej){

        const flags = ['🇰🇷','🇨🇺','🇨🇦'];
        rej(flags);

    })
}

async function printItems(){

    const fruits = await fetchFruits();
    console.log(fruits);
}

async function printItemsf(){

    try{    // 에러를 만나기 전까지 내부 문장을 계속 실행
        console.log('g');
        const flags = await fetchFlags();
        console.log(flags); //rejcet ,, 거절됨 ,에러 를 만나서 다음 문장을 실행하지 않고 바로 catch로 넘어감
        console.log('k');
    }catch(Zzzzzz){
        console.log('f');
        console.log(Zzzzzz);
    }
}

// printItems();
printItemsf();