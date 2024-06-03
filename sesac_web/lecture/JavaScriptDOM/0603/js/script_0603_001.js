const obj1 = { one: 1, two : 2 };
const obj2 = obj1;

// 값의 복사와 참조값의 전달에는 확연한 차이가 존재함.

obj1.five = 5;
console.log(obj1, obj2);
console.log(obj1 === obj2);

const obj3 = { one : 1, two : 2};
const obj4 = { one : 1, two : 2};

console.log(Object.entries(obj3), Object.entries(obj4));
console.log(obj3 === obj4);

console.log(Math.E);

