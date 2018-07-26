class Rectangle {
    constructor(heigt = 23, width = 43){
        this.heigt = heigt; 
        this.width = width; 
    }
} 

const square = new Rectangle(5,5); 
const poster = new Rectangle(2,3);  
const element = new Rectangle();
console.log(square.heigt, square.width); 
console.log(poster.heigt, poster.width);  
console.log(element.heigt, element.width);  
/*
Class Declarations are not hoisted while Function Declarations are. 
If you try to access your class before declaring it, ReferenceError will be returned. 

The constructor is a special method which is used for creating and initializing an object created with a class.
There can be only one constructor in each class. 
*/
//============================================================================================== 
var Rectangle = class  {
    constructor(heigt = 23, width = 43){
        this.heigt = heigt; 
        this.width = width; 
    }
} 

const square = new Rectangle(5,5); 
const poster = new Rectangle(2,3);  
const element = new Rectangle();
console.log(square.heigt, square.width); 
console.log(poster.heigt, poster.width);  
console.log(element.heigt, element.width); 
//==============================================================================================  
let Rectangle = class  {
    constructor(heigt = 23, width = 43){
        this.heigt = heigt; 
        this.width = width; 
    }
} 

const square = new Rectangle(5,5); 
const poster = new Rectangle(2,3);  
const element = new Rectangle();
console.log(square.heigt, square.width); 
console.log(poster.heigt, poster.width);  
console.log(element.heigt, element.width); 
//==============================================================================================  


