const express = require('express');
const app =express();

//crypto 내장 모듈을 불러오기

const crypto =require('crypto');

/** 매개변수로 받은 pw 를 암호화하는 함수를 정의하기
 * sha512 방식을 사용해서
 * base64 방식으로 인코딩 하기
 */
const createHashedPw=(pw)=>{
  //

  return crypto.createHash('sha512').update(pw).digest('base64');
}

console.log(createHashedPw('1234'));
console.log(createHashedPw('1234'));








app.listen(13431,()=>{
  console.log(' 서 ~버 ~열 ~림');
})