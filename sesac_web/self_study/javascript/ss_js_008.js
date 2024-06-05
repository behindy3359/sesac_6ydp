const iAmAnswerbox = document.querySelector('#answerBox');
const iAmButton1 = document.querySelector('#iAmButton1');
const iAmButton2 = document.querySelector('#iAmButton2');
const iAmButton3 = document.querySelector('#iAmButton3');


// callback: 즉각적인 응답


function sayHello() {
    let time = 0;
    const start_time = performance.now();


    let a = document.createElement('div');
    let b = document.createElement('div');
    let c = document.createElement('div');
    let d = document.createElement('div');
    let e = document.createElement('div');
    let f = document.createElement('div');
    let g = document.createElement('div');
    let h = document.createElement('div');
    let i = document.createElement('div');

    a.textContent='Hello';
    console.log(a);
    iAmAnswerbox.appendChild(a);



    const end_time = performance.now();
    console.log(`Result Time :  ${end_time - start_time} ms`);
}

// 

iAmButton1.addEventListener('click', function(){
    let time = 0;
    const start_time = performance.now();

    let a = document.createElement('div');
    let b = document.createElement('div');
    let c = document.createElement('div');
    let d = document.createElement('div');
    let e = document.createElement('div');
    let f = document.createElement('div');
    let g = document.createElement('div');
    let h = document.createElement('div');
    let i = document.createElement('div');
    a.textContent='Hello';
    console.log(a);
    iAmAnswerbox.appendChild(a);


    const end_time = performance.now();
    console.log(`Result Time :  ${end_time - start_time} ms`);
});
iAmButton2.addEventListener('click', (event) => sayHello());
iAmButton3.addEventListener('click', sayHello);
