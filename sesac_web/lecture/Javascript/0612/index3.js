//---------------------------------------
//rest 파라미터
//함수에서 사용시

// const values = [ 10, 20, 30, 40, 50, 60 ];
// function getNumvvvver( a, b, c, d, e, f, g, ...VVVV ) { /// 순서대로 읽고 ...VVVV 나머지를 여기(VVVV)에 넣어줘!
//     console.log(a,b,c,d,e,f,g);
//     console.log(VVVV);
// }
// getNumvvvver( ...values );

// const icecream = {
//     name : 'wordbestCup',
//     company :'lotte',
//     flavor : 'appleMintChocolate',
//     price : 9900,
// };

// const {name , flavor,...VVVEEE} = icecream;

// console.log(name, flavor);
// console.log(VVVEEE);



const numberS = [1,2,3,4,5,6,7,8];
const [ one1, two2, three3, ...resttt ] = numberS;

console.log( one1, two2, three3 );
console.log( resttt );
