const iAmAnswerbox = document.querySelector('#answerBox');
const iAmButton1 = document.querySelector('#iAmButton1');
const iAmButton2 = document.querySelector('#iAmButton2');
const iAmButton3 = document.querySelector('#iAmButton3');

function sayHello() {
    console.log('Hello');
}

    iAmButton1.addEventListener('click', function(){
        console.log('Hello');
    });

    iAmButton2.addEventListener('click', (event) => sayHello());
    iAmButton3.addEventListener('click', sayHello);