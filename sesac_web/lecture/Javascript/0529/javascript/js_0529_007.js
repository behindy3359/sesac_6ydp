// // 조건문

// // if 문
// if ( 5 > 3 ){
//     console.log('true');
// }else{
//     console.log('false');
// }

// let number1 = Number(prompt('숫자를 입력해주세요!'));
// let number2 = Number(prompt('숫자를 입력해주세요!'));

// if( number1 > number2 ){
//     console.log( `number1: ${number1}이 더 커요`);
// }else if( number1 == number2){
//     console.log( `둘이 ${number1} 로 같네요`);
// }else{
//     console.log( `number2: ${number2}이 더 커요`);
// }

let userId ='user01';
let userPw ='1234';

function loginUser(){
    let inputId = prompt('id를 입력해주세요');
    let inputPw = prompt('password를 입력해주세요');
    if ( inputId == userId ) {
        if( inputPw == userPw ){
            console.log( '로그인 성공! ' );
        }else if(inputPw == ''){
            console.log( '비밀번호 입력 안함! ' );
        }
        else{
            console.log( '비밀번호가 틀렸습니다! ');
        }
    }else if(inputId == '') {
        console.log( '아이디 입력 안함!' );
    }
    else{
        console.log( '아이디가 틀렸습니다! ' );
    }
}
loginUser();