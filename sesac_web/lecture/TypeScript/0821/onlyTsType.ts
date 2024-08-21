let testTuple : [string,string];
testTuple=['text1','text2'];
console.log(testTuple);

let testTuple2 : [string, string] = ['text3','text4'];
console.log(testTuple2);

testTuple2[0] ='zerotext';
testTuple2[1] ='zerotext1';

console.log(testTuple2);

// 튜플의 숨겨진 한계 - 길이와 타입이 정해진 것처럼 보이지만 , 일부 메서드가 동작하므로 그 정의가 깨짐
// TS 의 타입 시스템이 배열 메소드와 관련된 동작을 '완전히' 제한하지 않기 때믄
// 타입 시스템의 의도와 어긋나는 동작을 방지하고자 한다면,
// -as const 를 사용하거나, readonly 키워드를 사용해 튜플을 불변으로 만들 수 있다.

//readonly
let drinks : readonly [string , number] = ['cider',1200];
// drinks.push('hello')
console.log(drinks);

// type 별칭
// -type 별칭을 이용해서 type을 선언 가능!
type campionInfo = [number,string, number];
// 엄격하고 명확한 데이터를 관리 해야할 때 이점
let most1 : campionInfo = [1,'string1', 10000];
let most2 : campionInfo = [10,'string2', 20000];

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}
console.log(Auth.admin);
console.log(Auth.user);
console.log(Auth.guest);

enum menu {
  pasta = 4000,
  chicken = 5000,
  pizza,
}
console.log(menu.pasta);
console.log(menu.chicken);
console.log(menu.pizza);

enum cafe {
  americano = '아메리카노',
  caffelatte = '카페라떼',
}
console.log(cafe.americano);
console.log(cafe.caffelatte);

enum cake{
  choco,
  vanila = 200,
  mango,
  kiwi = 'kiwi',
}

console.log(cake.choco);
console.log(cake.vanila);
console.log(cake.mango);
console.log(cake.kiwi);

let val : any;
val = true;
val = 200;
val = '신기하네';

console.log(val);

let val2;
val2 = false;
val2 = 'cat';
console.log(val2);













