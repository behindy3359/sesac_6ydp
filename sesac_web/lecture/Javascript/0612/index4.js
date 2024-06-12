// class GANADARAMABA{
    
//     constructor( jaum, moum ){
//         this.jaum = jaum; //여러 곳에서 활용될 수 있기 때문에 ,  다른 스코프 요소들과 혼동하지 않기 위해서 this 를 활용해 내부에 있는 요소들이라고 지정해줌
//         this.moum = moum;
//     }

//     Hangul(){

//     }
// }


// 클래스
class House{
    
    constructor( a, b, c ){ // 정해진 명칭 , 생성자 
        this.name = a;
        this.year = b;
        this.window = c;
    }
    getAge(){
        console.log(`${this.name}는 건축한지 ${2024 - this.year}년 되었어요!`);
    }
    
    getWindow(){
        console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
    }
};

// const house1 = new House('초가집', 1500, 1); // 클래스를 이용해서 인스턴스를 생성시 constructor에 선언된 매개변수 대로 값을 지정해야 한다.

// const house2 = new House('기와집', 1600);

// console.log(house1);
// console.log(house2);
// console.log(house1.name);
// console.log(house1.year);
// console.log(house1.window);
// house1.getAge();
// house1.getWindow();
// house2.getAge();
// house2.getWindow();

class Apartment extends House{
    constructor( name, year, window , d, e ){
        super(name, year, window)
        this.floor = d;
        this.windowMaker = e;
    }
    getApyInfo(){
        return console.log(`${this.name}의 창문은 ${this.window}개 , 층수는 ${this.floor}, 지어진 지 ${2024-this.year} 년 되었어요!,`);
    }
    getWindow(){
        return console.log(`${this.name}아파트의 창문은 ${this.window}개이며 이들은 모두 ${this.windowMaker}에서 제작되었습니다.`);
    }
}

const apt1 =new Apartment('높은 아파트',2022,1000,22,'높은 창문',123 );
const apt2 =new Apartment('넓은 아파트',2023,2000,10,'넓은 창문',123 );


console.log(apt1);
console.log(apt2);

apt1.getApyInfo();
apt1.getWindow();

apt2.getApyInfo();
apt2.getWindow();






