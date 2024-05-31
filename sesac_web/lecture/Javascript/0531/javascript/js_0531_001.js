// 조건문 - switch
// true / false 이외의 결과값을 갖는 조건을 사용해야 함
// 변수와 case 결과값이 일치해야 명령문을 실행함

// 삼항 연산자 if문을 간단하게 만드는 녀석들
// 조건식 ? 조건식이 참인 경우 명령문 : 조건식이 거짓인 경우 명령문 ;
//  - 한줄로 간단히 표현 가능
// let name = ' ';
// name == '진형' ? console.log('참'):console.log('거짓');
 // --------------------------------------------------------------------
 // -switch 문
 // - 하나 이상의 case 문으로 구성.
 // - default가 필수는 아니지만 사용하길 권장. = if문의 else 같은 존재
 // - 예기치 못한 입력값에 대처할 수 있다.
 // - switch 문 내부의 모든 case에서 탈출하게 되면 실행.
 // - 여러개의 case문을 묶을 수도 있다.
 // - break ;
 // - 조건을 빠져나갈 때 사용하는 키워드


// let a = 4;
// switch (a) {
//     case 1:
//     case 2:
//     case 3:
//         console.log( ' a 가 1~3 이군요! ' );
//         break;
//     case 4:
//         console.log( ' a 가 4 이군요! ' );
//         break;
//     case 5:
//         console.log( ' a 가 5 이군요! ' );
//         break;
//     default:
//         console.log( ' a 가 무슨 값인지 모르겠어요! ' );
//         break;
// }
// * 실습
//  0~ 100 외의 숫자는 들어오지 않는다고 가정
// 힌트) Number / parseInt(  ) , 10 --- 숫자형 형변환

// let score1 = Math.floor((Math.random())*100);
// console.log(`점수 : ${score1}`);

// let scoreGrade = score1 - (score1%10);
// score = parseInt(score/10);

// switch ( scoreGrade ) {
//     case (scoreGrade = 90) :
//         console.log('A 학점 입니다.');
//         break;
//     case (scoreGrade = 80) :
//         console.log('B 학점 입니다.');
//         break;
//     case (scoreGrade = 70) :
//         console.log('C 학점 입니다.');
//         break;
//     case (scoreGrade = 60) :
//         console.log('D 학점 입니다.');
//         break;
//     default: 
//         console.log('F 학점 입니다.');
//         break;
// }



const NOW = new Date().getHours();
console.log(NOW);
NOW > 12 ? console.log('오후') : console.log('오전');


// let now2 = Math.floor(Math.random()*24);
// console.log(NOW);
// console.log(now2);
// now2 > 12 ? console.log('오후') : console.log('오전');





