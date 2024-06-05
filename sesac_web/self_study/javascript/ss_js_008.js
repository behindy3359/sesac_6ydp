const iAmAnswerbox = document.querySelector('#answerBox');
const iAmButton1 = document.querySelector('#iAmButton1');
const iAmButton2 = document.querySelector('#iAmButton2');
const iAmButton3 = document.querySelector('#iAmButton3');


// callback: 즉각적인 응답


function sayHello() {
    let a = document.createElement('div');
    a.textContent='Hello';
    console.log(a);
    iAmAnswerbox.appendChild(a);
}

// 

iAmButton1.addEventListener('click', function(){
    let a = document.createElement('div');
    a.textContent='Hello';
    console.log(a);
    iAmAnswerbox.appendChild(a);
});
iAmButton2.addEventListener('click', (event) => sayHello());
iAmButton3.addEventListener('click', sayHello);
