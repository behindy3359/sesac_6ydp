const crypto =require('crypto');

/** 매개변수로 받은 pw 를 암호화하는 함수를 정의하기
 * sha512 방식을 사용해서
 * base64 방식으로 인코딩 하기
 */
const createHashedPw=(pw)=>{
  return crypto.createHash('sha512').update(pw).digest('base64');
}

// 해시 함수의 한계는 같은 입력에 대해서 항상 동일한 출력이 보장되기 때문에
// // 레인보우 테이블과 같은 방법을 사용하면 역추적이 가능하다
// console.log( createHashedPw('1234') );
// console.log( createHashedPw('1234') );
// console.log( createHashedPw('1233') ); // 미세한 변화에도 hash 값이 완전히 다름
// console.log( createHashedPw('가나다라') );
// console.log( createHashedPw('rkskekfk') );

/**  pbkdf2
 * - 비밀번호 기반 키 도출 함수로 주로 비밀번호 저장할 때 사용
 * 단방향 암호화 함수
 * 임으의 salt 값을 생성한 후 , pbkdf2Sync 함수를 사용해서 해당 소금과 비밀번호를 기반으로 해시를 생성
*/
const saltAndHashPw = (pw) => {

  /**
   * 무작위로 생성한 소금을 인코딩해서 받아둠!
  */
  const salt = crypto.randomBytes(16).toString('base64');

  /**
   * 반복 횟수
   */
  const loopN = 100000;

  /**
   * 생성할 키의 길이
   */
  const keylen = 64;

  /**
   * 해시 알고리즘
   */
  const digest = 'sha512';
  const hash = crypto
  .pbkdf2Sync(pw, salt, loopN, keylen, digest) //pw를 암호화
  .toString('base64'); // 버퍼 형태로 반환되기 때문에 ... 결과를 인코딩해 사용하기 쉬운 형태로 가공할 필요가 있음
  return {
    salt, hash
  }
}

/**
 * 비밀번호 비교 함수
 * 
 */
const comparePw = ( inputPw, savedSalt, savedHash ) => {

  /**
   * 반복 횟수
   */
  const loopN = 100000;

  /**
   * 생성할 키의 길이
   */
  const keylen = 64;

  /**
   * 해시 알고리즘
   */
  const digest = 'sha512';
  
  const hash =crypto
    .pbkdf2Sync(inputPw, savedSalt, loopN, keylen, digest) //pw를 암호화
    .toString('base64'); // 버퍼 형태로 반환되기 때문에 ... 결과를 인코딩해 사용하기 쉬운 형태로 가공할 필요가 있음

  // 사용자가 주장하는 비밀번호를 저장된 소금과 조합해 암호화환 해시값
  // 사용자가 초기에 입력해 저장된 암호화된 해시값
  return hash === savedHash;
}

const password = '1234!'

console.log('iampw :', password);

const { salt ,hash } = saltAndHashPw(password);

console.log('saved salt :',salt); 
console.log('saved hash :',hash); 

console.log(comparePw(password,salt,hash));
