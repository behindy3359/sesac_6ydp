// && (and) || (or)
// true && true
// true && false

const x = 5;
const result = x || 500; // or 연산자의 경우 좌변의 값이 참이 되면 우변은 연산하지 않고 값을 출력한다.
console.log(result);

const y= 7;
let k = 1;

const result3 = x < y && k; // 
console.log(result3);

// falsy , truthy
// falsy - undefined, null, 0, false, '', NaN
// truthy - 나머지 경우들
let userColor = undefined;//'red';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor; // 유저가 값을 입력하면 유저의 값을 사용하고 만약 입력되지 않으면 기본값을 사용할거야 << 인경우 

console.log(currentColor);


