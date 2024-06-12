//구조분해 할당! 구조를 분해해서 다시! 할당한다!
// const arr1 = [12,23,34,54,15];
// const arr2 = ['a','b','c'];

// const [ oneV, twoV, threeV, fourV, fiveV ] = arr1;
// console.log( oneV, twoV, threeV, fourV, fiveV );

// const[x,y,z,alpha] =arr2;
// console.log(x,y,z,alpha);

// let num1 = '가나다';
// let num2 = 2222;
// // 변수 값의 교환, 2개의 변수 값을 교환할 때 제 3의 변수를 사용했어야 했지만, 지금은 x

// console.log(`before - num2 :${num2}, num1 :${num1}`);
// [num2, num1] = [num1, num2] //==> 변수 값의 교환
// console.log(`after - num2 :${num2}, num1 :${num1}`);

// const lists =['apple','grape'];
// [f1,f2,f3='orange'] = lists; // 값이 안들어오면! default로 지정해 주십시오!

// console.log(f1,f2,f3);

// // 객체, object : key 와 value로 이루어진 무언가!!!, {}
// // const obj = [ 10, 20 ];
// // 
// // 첫 번째 객체
// const obj1 = {
//     name: "John",
//     age: 25,
//     city: "New York",
//     hobby: "Reading",
//     profession: "Engineer"
// };
// console.log(obj1.name);
// console.log(obj1.age);
// console.log(obj1['name']);
// console.log(obj1['age']);

// const{ name, age, city, star = 1000 } = obj1; // 객체 구조 분해 ,, default값을 주는것도 가능
// console.log( name, age, city, star );

// const{ a1, b1, c1} = obj1; // 존재하는 key값만 활용할 수 있다.
// console.log( a1, b1, c1); // ==> undefined 출력됨 , 변수는 할당되었지만 ( 초기화는 되었지만 ) value가 비어있는ㄴ 경우

const lectureInfo = {
    name : 'Coding On',
    part : 'web',
    leader : 'Kim', // last (,) means we can append extra key, value couples
};

console.log(lectureInfo);

function getInfo(lec){
    const{ name, part, leader }  = lec;
    const output =`${name} class is about ${part} Developments and leader ${leader} lead this class`;
    return output;
};

console.log(getInfo(lectureInfo));