//연산자

//대입연산자 ( - )
// : 변수에 값을 "할당" 할 때 , 사용하는 연산자.

//산술 연산자
//사칙연산 : +, -, /, *
//나머지 연산 : %
//거듭제곱 연산 : **

let a = 2;
let b = 3;

console.log( a + b );
console.log( a - b );
console.log( a * b );
console.log( a ** b );
console.log( a / b );
console.log( a % b );

//비교 연산자
// 동등 비교
// - 같다 ( 동등 ) : ==, ===
// - 같지 않다 ( 부등 ) : != , !==
// ==, !=, : "값" 만 비교, type 은 비교하지 않음 -> 관대한 연산자


// - 자제하도록 하자
let string_001 = "true";
let boolean_001 = true;
let number_001 = 1;

console.log('string_001 :', string_001);
console.log('boolean_001 :', boolean_001);
console.log('number_001 :', number_001);


let string_002 = "1";
console.log('string_002 :', string_002);

console.log( 'string_001 == boolean_001 :', string_001 == boolean_001 );
console.log( 'string_001 == number_001 :', string_001 == number_001 );
console.log( 'number_001 == string_002 :', number_001 == string_002 );
// ===, !== : "값"과 "타입" 모두 비교 -> 엄격한 연산자

//문자열에서 + 연산 : 문자열을 붙여서 보여준다
//문자열에서 나머지 산술연산자들 : 숫자로 변환해서 연산해준다!

//증감 연산자
// ++ : 변수 값을 1 증가
// -- : 변수 값을 1 감소
// 증감 연산자를 붙이는 위치에 따라 결과가 다르다.

let resultNumber1 , resultNumber2;
let num1 = 10, num2 = 20;
console.log(num1);
resultNumber1 = num1++
console.log(num1);
console.log(num1+=1);

