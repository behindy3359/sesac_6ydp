// 인터페이스 정의
interface Crew {
  name : string;
  age : number;
  exp : boolean;
}

//인터페이스가 적용된 객체 생성, 정의할 때 포함된 모든 데이터가 반드시 정의되어야 함
const 크루 : Crew = {
  name : 'Daemon',
  age : 20,
  exp : true,
}

// console.log( 크루 );

// 모든 속성이 반드시 필수가 아니어도 사용 가능하게 만드는 --> 선택적 속성
// 인터페이스 정의
interface 새싹크루 {
  readonly name : string;
  age? : number;
  exp? : boolean;
}

const 크루2 :새싹크루={
  name : '크루루루',
}
const 크루3 :새싹크루={
  name : '크롸롸롸',
  age : 30000,
}
const 크루4 : 새싹크루 ={
  name : '김춘식',
  age : 20000,
  exp : true
}
// 크루4.name = '이만춘';

// console.log(크루2);
// console.log(크루3);
// console.log(크루4);

enum Score {
  Aplus ='A+',
  A= 'A',
  B= 'B',
  C= 'C',
}

interface 선수 extends 새싹크루 {
  position : string;
  readonly salary? : number;
  [grade : number] : Score;


}

const 김문식 : 선수 ={
  name : '김문식',
  position : '투수',
  age : 20,
  exp : true,
  1 : Score.Aplus,
}
// console.log('김문식 >>>> ',김문식);
// 김문식.exp = false;
// console.log('김문식 >>>> ',김문식);

interface 장난감{
  name : string;
  start(): void;
}

interface 차{
  name : string;
  color : string;
  price : number;
}

interface 장난감차 extends 장난감, 차{}
const 빠방이 : 장난감차 = {
  name : '빠방이',
  start() {
    console.log('엔진 점화');
    console.log('으어어엉');
  },
  color : 'red',
  price : 1000,
}
console.log('빠방이 >>>>', 빠방이);


type Gender = 'F' | 'M';
type Person ={
  name : string;
  age? : number;
  like? : string[];
  gender : Gender;
}

const 지나가던김창식씨 ={
  name : '김창식',
  age : 30,
  gender : 'F',
}

console.log( '지나가던김창식씨 >>>>',지나가던김창식씨 );
