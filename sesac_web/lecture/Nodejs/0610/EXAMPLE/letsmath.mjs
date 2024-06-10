// es6 module 형식으로 확장자 => .mjs 사용
// import로 불러옴
// 실행시 확장자를 적어야 한다
// 프로젝트로 es6 를 작성할 때는
// package.json에 "type":"module" 을 적어야 한다.



const add = (a,b) =>{
    return a+b;
}
//
export default add;