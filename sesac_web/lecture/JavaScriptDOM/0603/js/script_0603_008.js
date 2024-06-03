// function clickH1() {
//     alert('캬아아아앆!');
// }
// const btn1 = document.querySelector('.btn-black');
// console.log(btn1);
// const btn2 = document.querySelector('.btn-green');
// console.log(btn2);
// const btn3 = document.querySelector('.btn-red');
// console.log(btn3);
// const btn4 = document.querySelector('.btn-purple');
// console.log(btn4);
// const container = document.getElementsByClassName('container')[0];

// btn1.addEventListener('click', function() {
//     alert('버튼 1을 클릭하셨네요!')
// })
// btn1.addEventListener('mouseover', function(){
//     btn1.style.backgroundColor='grey';
// })
// btn1.addEventListener('mouseout', function(){
//     btn1.style.backgroundColor='black';
// })

// btn2.addEventListener('click', () => {
//     const divvv = document.createElement('div');
//     divvv.style.backgroundColor = 'pink';
//     divvv.innerHTML="HIIIII!I!I!I!II!I";
//     container.append(divvv);
// })

// const todoForm = document.getElementById('todoForm');
// console.log(todoForm);
// const todos = document.querySelector('.todoContainer');
// console.log(todos);
// const todoInput = document.querySelector('input[name="todo"]');
// console.log(todoInput);

// todoForm.addEventListener('submit',(e) =>{
//     e.preventDefault(); // 제출 시 새로고침을 막아준다.

//     const newToDo = todoInput.value.trim(); // 양쪽 공백 제거
//     if (newToDo != '' ){
//         const NewToDobutton = document.createElement('input'); // <li></li>
//         NewToDoLi.setAttribute('type', 'radio');

//         NewToDoLi.append(newToDo);
//         todos.append(NewToDoLi);
//     }
// })
// change : input요소에 변경이 일어나고, 다른 요소를 클릭해서, input이 포커스 아웃(blur) 처리 되었을 때 일어나는 이벤트
const chgInput = document.querySelector('#change-input');
chgInput.addEventListener('change',function(e){
    console.log('change!');
    console.log(e.target);
})
// input 에 값이 입력될 때마다 이벤트 발생
const inpInput = document.querySelector('#input-input');
inpInput.addEventListener('input',function(e){
    // console.log('input!');
    console.log(this.value);
    const div = document.querySelector('.intro').value;
})
