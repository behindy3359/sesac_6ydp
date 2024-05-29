// 자바스크립트 함수에 대해서 배워보자!
// 함수 - 특정 작업을 수행하기 위해서 독립적으로 설계된 코드 집합
// 용어 정리
// - 함수 정의 ( 선언 ) : 함수를 '생성'
// - 함수 호출 : 함수를 "사용"
// - 함수 선언 방식 
//  #1 명시적 함수 선언 ( = 함수 선언문 )
//  - 함수 이름과 매개 변수를 명시하고 함수의 본문을 중괄호로 감싼다.
//  - 스크립트 어디에서든 호출 할 수 있다.
//  - "function" 키워드를 활용하여 함수를 선언하는 방식이다.

function helloWorld(  ) {
    //return 키워드는 생략 가능
    console.log('helloworld');
}
helloWorld();


//return : 함수의 반환값 
// 함수 내부 ( body, block )코드의 "최종 결과값"
// 최종결과값을 저장하고 보관하기 위한 키워드
// return 키워드를 만나면 함수 실행 중단
// return 다음에 코드 더 작성해봐야 의미가 없다는 뜻;
function helloWorlds() {
    text1 = 'helloworld2';
    return text1;
}
console.log(helloWorlds()); 
//  #2 함수 표현식 ( Function Expression )
//  - 변수에 익명 함수를 할당( 저장 ) 하는 형태.
//  - 변수가 선언된 이후에만 호출 할 수 있다.

// * 익명함수
// - 말 그대로 이름이 없는 함수.
// -> 이름을 지정할 수 있ㅇㅁ.
// - 이 경우 함수 이름은 내부에서만 사용 가능

const sayHello = function hello() {
    console.log( 'welcome to hogwarts' );
}
sayHello();


const helloWorld3 = function () {
    console.log("my name is harry porter");
}

const helloWorld4 = function () {
    return "my name is James Moriaty";
}
helloWorld3();
console.log( helloWorld4() );

// 매개변수가 있는 함수!
// 매개변수가 한개 일때
function menus( a ){
    const foods = ['제육덮밥', '오므라이스', '돈까스', '돼지불백'];

    return foods[a]; 
}

console.log( menus(0) );
console.log( menus(1) );
console.log( menus(2) );
console.log( menus(3) );

//매개변수의 타입은 정해져있지 않다
