let troubledToDoLi = document.querySelectorAll('ul > li');
console.log(troubledToDoLi);
for(let i of troubledToDoLi){
    i.setAttribute('class', 'todo');
}