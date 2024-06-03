// console.log(document);
// console.log(document.head);
// console.log(document.childNodes[1].childNodes[0]);
// console.log(document.getElementsByTagName('body')[0]);
// console.log(document.URL);
// // console.log(document.domain); 
// // 취소선이 그어진 이유 - 해당 속성을 권장하지 않거나 더 이상 지원되지 않을 가능성을 나타냄
// // - 도메인을 사용한 접근 제어 방식은 보안상 취약할 수 있기 때문에 지양한다!

// // defer - 페이지가 로드된 후에 외부 스크립트를 실행해 준다.

// // DOM API ( Document Object Model, Application Programming Interface )


console.log(document.getElementById('green'));
console.log(document.getElementById('red'));

console.log(document.getElementsByClassName('pink').innerHTML);
console.log();


// 유사 배열 ( HTMLCollection, NodeList );
// [] 처럼생긴 배열을 의미 , 배열은 아님
// index, length는 가짐
// 배열과 달리 사용 가능한 메서드가 제한

// NodeList -> forEach( ) 반복문 사용 가능
// HTMLCollection -> forEach( ) 반복문 사용 불가능
// Array 변경
