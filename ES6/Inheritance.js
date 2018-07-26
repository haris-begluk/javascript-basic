class Animal {
    constructor(name){
        this.name = name;
    } 
    speak(){
        console.log(this.name + ' makes a noise!'); 
    }
} 
class Dog extends Animal {
speak(){
    console.log(this.name + ' bars. ');
}
} 

let animal = new Animal("animal"); 
let dog = new Dog('Rex'); 
animal.speak(); 
dog.speak(); 
//==============================================================================================
/* If there is a constructor present in the subclass, 
it needs to first call super() before using this. 
Also, the super keyword is used to call parent's methods. */
class Animal {
    constructor(name){
        this.name = name;
    } 
    speak(){
        console.log(this.name + ' makes a noise!'); 
    }
} 
class Dog extends Animal { 

speak(){ 
    super.speak(); //Call parent speak method
    console.log(this.name + ' bars. ');
}
} 

let animal = new Animal("animal"); 
let dog = new Dog('Rex'); 
animal.speak(); 
dog.speak(); 
//==============================================================================================