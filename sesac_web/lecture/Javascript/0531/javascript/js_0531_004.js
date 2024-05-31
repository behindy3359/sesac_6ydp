let str1 = 'welcome to hogwarts';
let str2 = '      i am Lord Voldemort      ';

console.log(str1);
console.log(str2);

console.log(str1.length);
console.log(str2.length);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

console.log(str1.trim());
console.log(str2.trim().length);
console.log('------------------------------------');

// indexOf()
// 위치 ( index ) : 0부터 시작
// 여러개 존재하면 앞의것에서 찾아줌
// 존재하지 않는 문자열, 아무것도 입력하지 않은경우 -1 반환
console.log(str2.indexOf('Lord'));
// slice() 문자열 자르기
// 음수값이 들어간다면 뒤에서부터 순사를 센다.
console.log(str2.slice(-11));

console.log('------------------------------------');
console.log(str1);
console.log(str2);

// 문자열 바꾸기
console.log(str2.replace('Lord Voldemort', 'Harry Porter'));
console.log(str1.replaceAll('t','!'));

//split() 문자열 쪼개기 ( 배열로 변환 )
let str3 = 'he is Professor Albus Dumbledore';
console.log( str3.split('o') );
console.log( str3.split('u') );

//repeat 문자열 반복

let arr = [ 1, 2, 3, 4, 5];
let arr2 = ['rat', 'pig', 'horse', 'cow', 'turtle', 'dragon'];

console.log( arr );
arr[5] = 6;
console.log(arr);
arr[8] = 11;    // 인덱스를 건너뛰면 empty 가 들어가게 됨
console.log(arr);
console.log( typeof arr[7] );

arr.push(666);
arr.push(777);
arr.pop();
arr.pop();
arr.pop();
arr.pop();
arr.pop();

console.log(arr);
arr2.unshift('tiger');
console.log( arr2 );

// length : 배열의 길이 변환
console.log( arr2.length );
console.log( arr2.includes( 'dragon' ) );

// console.log( arr2.reverse() );
console.log( arr2.join( '*' ) );


