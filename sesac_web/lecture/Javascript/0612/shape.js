class Shape{
    constructor(garo,sero){
        this.garo = garo;
        this.sero = sero;
    }
    getArea(){
        return ( this.garo * this.sero );
    }
}
let rec1 = new Shape(3,4);
console.log(rec1.getArea());


class Rectangle extends Shape{
    constructor(garo,sero){
        super(garo,sero)
    }
    getDaegak(){
        return Math.sqrt( ((this.garo)**2) + ((this.sero)**2));
    }
}
class Triangle extends Shape{
    constructor(garo,sero){
        super(garo,sero)
    }
    getArea(){
        return this.garo*this.sero/2;
    }
}
class Circle extends Shape{
    constructor(garo, sero, radius){
        super(garo, sero)
        this.radius = radius;
    }
    getArea(){
        if(this.garo == this.sero){
            return Math.PI*((this.garo)**2);
        }else{
            return Math.PI*(this.garo*this.sero); //pi *garo *sero
        }
    }
}
let rec2 = new Rectangle(5,6);
console.log(rec2.getDaegak());
console.log(rec2.getArea());

let tri1 = new Triangle(10, 12);
console.log(tri1.getArea());

let cir1 = new Circle(10, 12, 'radius');
console.log(cir1.getArea());
