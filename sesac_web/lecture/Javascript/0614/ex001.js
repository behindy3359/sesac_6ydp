// console.log(1);

// /** 2000ms 뒤에 이녀석을 출력해줘!  */
// /** setTimeout( code, delay ) delay 시간동안 기다리다가 code 함수를 실행하는 구문 */

// setTimeout(()=>{
//     console.log(2);
// }, 2000 );

// console.log(3);

// //1 -> 3 -> 2 순서대로 출력
// //JavaScript의 특성 
let product;
let price;
let start = new Date();

/** 마트에가서 고민을 할거야!고민하는중 출력 */
function goMart() {
    console.log('1 call goMart');
    console.log('1 마트에 가서 어떤 음료를 살지 고민한다 ');
}

/** 고민하는 딜레이를 줌
 *  
 */
function pickDrink() {
    console.log('2 call pickDrink');
    setTimeout(()=>{
        console.log('2 call setTimeout in pick Drink ');
        console.log('2 고민 끝!');
        product = '제로 콜라';
        price = 2000;
    }, 3000);
}

/**
 * 돈을 지불하는 함수!
 * @param {'string - product Name'} product 
 * @param {'number - product price'} price 
 */
function pay( product, price ){
    console.log('3 call pay');
    setTimeout(()=>{
        console.log('3 call setTimeout in pay');
        console.log(`상품명 :${product}, 가격 : ${price}`);
        let payEnd = new Date();
        console.log(payEnd-start);
    }, 4000)
}

goMart();

pickDrink();

// 고민이 끝나기 전에 돈을 내버린 상황!
pay( product, price );
let end = new Date();
console.log(end-start);

