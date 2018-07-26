//For loop iterate over values in a list:
let arr = [1,2,3]; 
for(let k = 0; k < arr.length; k++){
    console.log(arr[k]);
} 
//================================ 
//For...in iterating over enumerable keys of an object  
/*
The for...in loop should NOT be used to iterate over arrays because, depending on the JavaScript engine,
 it could iterate in an arbitrary order. Also, the iterating variable is a string, not a number,
 so if you try to do any math with the variable, you'll be performing string concatenation instead of addition.
*/ 

let obj = {a:1, b:2, c:3,d: 4}; 
for(let i in obj){
console.log(i);
}
//================================ 
//for..of iterating over iterable objects: 
let list = ['X', 'y', 'z']; 
for(let val of list){
    console.log(val);
}
//================================ 
//for..of works for other iterable objects as well including strings 
for(let ch of 'Heloo'){
    console.log(ch);
} 