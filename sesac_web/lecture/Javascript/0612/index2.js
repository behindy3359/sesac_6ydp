// spread 연산자 ...
// const a = [ 1, 2, 3 ];
// const b = [ 4, 5 ];

// const spread =[ ...a, ...b ]; //두 배열이 합쳐져서 나옴!
// console.log( spread );

const c = [...'HELLO'];
console.log(c);
//
const b = 'HELLO';
b.split('');

const d = 'HELLO';
const e =[];
for(let i = 0 ; i <d.length ; i ++){
    e.push(d.slice(i,i+1));
}
console.log(e);


const bandM ={
    base : 'chip',
    guitar : 'potato',
    drum : 'onion'
}
const bandF = {
    ...bandM,
    subGuitar : 'apple',
    vocal : 'banana'
}

console.log(bandF);