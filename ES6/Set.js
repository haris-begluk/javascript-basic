/*A Set object can be used to hold unique values (no repetitions are allowed).
A value in a set can be anything (objects and primitive values). 

The syntax new Set([iterable]) creates a Set object where iterable is an array or any other iterable 
object of values.

The size property returns the number of distinct values in a set.
 */ 
let set = new Set([1,2,3,4,55,7,1,2,3]); 
console.log(set.size); //6 
//==============================================================================================
/*Methods
add(value) Adds a new element with the given value to the Set.
delete(value) Deletes a specified value from the set.
has(value) Returns true if a specified value exists in the set and false otherwise.
clear() Clears the set.
values() Returns an Iterator of values in the set.*/ 
let set = new Set(); 
set.add(4).add(9).add(59).add(4).add(9); 
console.log(set.has(9));// true 
for(let v of set.values()) 
console.log(v); 
for(let v of set.keys()) 
console.log(v);  
for(let v of set.entries()) 
console.log(v);  
//Set supports different data types i.e. 1 and "1" are two different values.
//NaN and undefined can also be stored in Set.
//==============================================================================================