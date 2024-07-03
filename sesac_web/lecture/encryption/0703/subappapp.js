// bcrypt
// - 비밀번호 암호화 시 자주 사용하는 모듈
// - 외부 라이브러리이므로 설치 필요
// - 양방향 암호화는 지원하지 않으며, 비밀번호 암호화에 특화된 모듈

const bcrypt = require('bcrypt');

const originalPW = '12345';
const saltRound = 10; //2^10 회 반복

// 솔트 라운드 숫자가 커진다? => 해시 생성 시간이 느려짐, 보안성이 향상됨
// 비밀번호 해싱 함수 정의
const hashPw = (pw) =>{
  return bcrypt.hashSync(pw, saltRound);
}

// 비밀번호 정답 검증 함수 정의 
const comparePw=(pw, originalPW)=>{

  //사용자가 입력한 평문과 해시값을 비교하여 boolean 형태로 반환
  return bcrypt.compareSync(pw,originalPW);
}

const hashedPw = hashPw(originalPW);

console.log(`hashedPW :${hashedPw}`);
const isMatch = comparePw( '12345', hashedPw );

console.log('isMatch: ',isMatch);
const isMatch2 = comparePw( '1234', hashedPw );

console.log('isMatch2: ',isMatch2);
