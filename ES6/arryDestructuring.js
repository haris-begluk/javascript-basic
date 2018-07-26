/*
The destructuring assignment syntax is a JavaScript expression 
that makes it possible to unpack values from arrays, or properties from objects, into distinct variables. 
ES6 has added a shorthand syntax for destructuring an array.
*/ 

let arr = ['1', '2', '3']; 
let [one, two, three] = arr; 
console.log(one); 
console.log(two); 
console.log(three);  
//============================================================================================================ 
//destructure an array returned by a function 
let a = () => {
    return ['1', '2', '3']; 
};
let [one, , two] = a(); 
console.log(one); 
console.log(two); 
//console.log(three);
//============================================================================================================ 
//The destructuring syntax also simplifies assignment and swapping values: 
let a, b, c = 4, d = 8;  
console.log(a + ' ' + b + ' ' +c + ' ' + d); //undefined undefined 4 8 
[a, b = 6] = [2];  
console.log(a + ' ' + b); //a = 2, b = 6
[c, d ] = [d, c];  
console.log(c + ' ' + d); //c = 8, d = 4 
//============================================================================================================ 
let nameA = 'Jack'; 
let nameB = 'Bob'; 
console.log(nameA + ' ' + nameB); //Jack Bobo 
//ES2015
var temp = nameA; 
nameA = nameB; 
nameB=temp;  
console.log(nameA + ' ' + nameB);//Bob Jack 
//ES6
[nameA, nameB] = [nameB, nameA]; 
console.log(nameA + ' ' + nameB);//Jack Bob 
//============================================================================================================ 
let [a,b,c] = 'SoloLearn'; 
console.log(a,b,c);//S o l