let mathScore = prompt('수학점수 입력');
console.log('수학 점수 :',mathScore);
let engScore = prompt('영어점수 입력');
console.log('영어 점수 :',engScore);
let avgScore = (Number(mathScore) + Number(engScore))/2;
console.log(`평균 점수는 ${avgScore}점 입니다.`);