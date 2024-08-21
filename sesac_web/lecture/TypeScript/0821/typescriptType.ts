

let a:number = 1;

// a = 'hello';

console.log('a >>>>', a);

let b : string ='str';
let c : boolean = true;
let d : undefined;
let e : null = null;


console.log('b:', b);
console.log('c:', c);
console.log('d:', d);
console.log('e:', e);

// let f:boolean ='false';
// 타입 추론 [ 암묵적 추론 ]
// TypeScript는 변수의 초기값을 기반으로 변수의 타입을 자동으로 '추론'함
let aa = 1;
let bb = 'hi';
let cc = false;
let dd;
let ee = null;

console.log(aa, bb, cc, dd, ee);

let numArr :number[] = [1,2,3,4,5];
let arr1 :(number|boolean|string)[] = [1,true,'i am string'];
console.log(numArr);
console.log(arr1);

// | 연산자
// - 유니온타입 을 정의할 때 사용
// -> 하나의 값이 여러 타입 중 하나일 수 있음을 명시하는 타입 시스템의 기능
let arr2 : Array<boolean|null|number[]> = [true,false,null,[1,2,3]];

console.log(arr2);

let arr3 : any[] = [1,2,'wow',true,null]
console.log(arr3);

let obj1: object ={
  name : 'daemon',
  ahe : 20,
};

console.log(obj1);


