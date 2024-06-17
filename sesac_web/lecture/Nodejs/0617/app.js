//JSON

const car = `{
  "model" : "IQONIQ 5 ",
  "company" : "HYUNDAI",
  "price" : 50000000,
  "year" : 2023,
  "isElectricCar" : "car",
  "options" : ["side", "smart sensor", "built-in cam"]
}`;



let carcar = JSON.parse(car);
// json 형싱
console.log(car);
// javascript 객체 형식
console.log(carcar);

//obj 변수는 js object이므로, .(dot)/[]연산자를 이용해 키 값에 접근 가능

console.log(carcar.model);
console.log(carcar.price);
console.log(carcar.year);
console.log(carcar.hello); // hello 라는 키 값이 존재하지 않아서 
console.log(carcar);

//직렬화 : json.stringfy() -> 다시 json으로 변환, 통신하기 쉬운 포맷으로 변환

const json = JSON.stringify(carcar);
console.log(json, typeof(json));
console.log(json.model); //undefined
console.log(json.price); //undefined
console.log(json.year);  //undefined
console.log(json.hello); //undefined

//stringfy 하면 이제 string 타입에 활용 가능한 내장 메서드들을 활용 가능



