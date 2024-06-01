let numberBox = [];
let sum = 0;
for( let i = 1 ; i <=100 ; i ++ ){
    numberBox.push(i);
}
console.log(numberBox);

// #1 for 문사용

for (let i = 0; i <= numberBox.length ; i++) {
    sum+= i;
}
console.log('sum by for: '+ sum);

// #2 For of 문 사용
sum = 0;

for( let i of numberBox ){// i : 배열 내의 요소 하나하나를 호출
    sum += i ;
}
console.log('sum by forof : '+ sum);

// #3 forEach 문 사용
sum = 0;
numberBox.forEach( i => {// i : 배열 내의 요소 하나하나를 호출
    sum += i ;
});
console.log('sum by foreach : '+ sum);