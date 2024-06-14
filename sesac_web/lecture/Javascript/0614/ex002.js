//콜백 함수 - ㅏ른 함수의 실행이 끝난 뒤에 실행되는 함수, js 에서 어떤 함수의 매개변수로 대입되는 함수
// 콘솔에 3초뒤에 고민끝, 상품명, 가격이 올바르게 출력

let product;
let price;

function goMart(){
    console.log( 'goMart 실행' );
}

/** CBF : call back function
 *  
 */

function pickDrink( CBF ) {
    
    setTimeout(()=>{
    
    console.log('고민끝');

    product = '제로콜라';
    price = 2000;

    CBF(product,price);

    },3000); 
}

goMart();

pickDrink((product, price) => {
    console.log( 'pay 실행' );
    console.log(`상품명 :${product}, 가격:${price}`);
});
