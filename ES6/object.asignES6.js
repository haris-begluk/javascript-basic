/* 
ES6 adds a new Object method assign() that allows us to combine multiple sources 
into one target to create a single new object. 
Object.assign() is also useful for creating a duplicate of an existing object.

 */
let person ={ 
    name: 'Jack', 
    age: 18, 
    sex: 'male'
}; 
let student = {
    name: 'Bob', 
    age:20, 
    xp: '2'
}; 
let newStudent = Object.assign({},person, student); 
console.log(newStudent); //{ name: 'Bob', age: 20, sex: 'male', xp: '2' }
let newPerson = Object.assign({}, student, person); 
console.log(newPerson);//{ name: 'Jack', age: 18, xp: '2', sex: 'male' }
/*
Here we used Object.assign() where the first parameter is the target object you want to apply new properties to. 
Every parameter after the first will be used as sources for the target. 
There are no limitations on the number of source parameters. 
However, order is important because properties in the second parameter will be overridden 
by properties of the same name in third parameter, and so on.
*/  
//======================================================================================================== 
let person = {
    name: 'Jack', 
    age:18
}; 
let newPerson = person; // newPerson references person 
newPerson.name = 'Bob';
console.log(newPerson.name); //'Bob'
console.log(person.name); //Bob
//======================================================================================================== 
let person = {
    name: 'Jack', 
    age:18
}; 
let newPerson = Object.assign({}, person); // object copy 
newPerson.name = 'Bob';
console.log(newPerson.name); //'Bob'
console.log(person.name); //Jack 
//========================================================================================================  
let person = {
    name: 'Jack', 
    age:18
}; 
let newPerson = Object.assign({}, person, {name: 'Bob'}); // object copy && value assign
console.log(newPerson.name); //'Bob'
console.log(person.name); //Jack 
//========================================================================================================
/*
Be aware that nested objects are still copied as reference. 
If you really want to copy whole object with it's nested objects and methods, 
one of approaches is using Lodash library "clone", "cloneDeep" methods
*/
