//  js 엔진 , 구글 : v8, + c++  = node.js 브라우저 밖에서 js 활용하기 위한 장치
//  모듈에는 사용자가 만든 모듈, 시스템 모듈, 빌트인 모듈,
// const add =( a, b ) => {
//     return a + b;
// }
// export 해서 다른 파일이 불러와서 사용할 수 있게끔 
// 모듈단위, 불러올 때, require() -> commonJS , es6에서 활용하기 위해서는 import 사용
// console.log( __dirname );
// console.log( __filename );


// // with add.js
// require('./add');
// const add = require('./add');
// console.log(add(10,20));
// console.log('From index.js');

// scope ( 범위 )- 모듈은 각각의 범위를 가지고 있다.
// with batman, superhero.js

// require('./batman');
// require('./superman');


// 모듈의 기초 형태

// ()() 함수의 자동 실행 형태

(function () {
    const superHero ="SuperMan";
    console.log(superHero);
})()

(function(exports, require, module, __filename, __dirname){
    //코드
})()