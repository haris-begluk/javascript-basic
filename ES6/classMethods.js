//==============================================================================================
class Rectangle  {
    constructor(heigt = 23, width = 43){
        this.heigt = heigt; 
        this.width = width; 
    } 
    get area(){
        return this.calcArea();
    } 
    calcArea(){
        return this.width * this.width;
    }
} 
//==============================================================================================
const square = new Rectangle(5,5); 
const poster = new Rectangle(2,3);  
const Default = new Rectangle();
console.log(square.heigt, square.width); 
console.log(poster.heigt, poster.width);  
console.log(Default.heigt, Default.width);  
// get Area 
console.log(square.area + " cm");  
square.heigt = 324; 
square.width = 553;
console.log(square.area + ' cm');  
//==============================================================================================
//static method example 
class Point {
    constructor(x,y){
        this.x = x; 
        this.y = y; 
    } 
    static distance(a,b){
        const dx = a.x - b.x; 
        const dy = a.y -b.y;  
        return Math.hypot(dx,dy);
    }
} 
let objA = new Point();  
const objB = new Point(99,2);
objA.x = 22; 
objA.y = 33; 
console.log(Point.distance(objA, objB)); 
console.log(Point.distance(objB, objA)); 
//==============================================================================================