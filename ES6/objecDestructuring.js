//Similar to Array destructuring, Object destructuring unpacks properties into distinct variables 
let obj = {h:100, s: true}; 
let {h,s} = obj; 
console.log(h,s); 
//===============================================================================================================
let obj = {h:100, s: true}; 
let {h,s} = obj; 
console.log(h,s); 
//===============================================================================================================
let a, b,c, d,e,f; 
({a,b} = {a:'Hello', b:'Jack'}); 
console.log(a,b); 
//===============================================================================================================
({c,d} = {e:'Hello', f:'Jack'}); //error
console.log(c,d,e,f); 
//=============================================================================================================== 
let {h, g} ={h: 'Jack', g:'bob'};  
console.log(h, g);
//=============================================================================================================== 
var o = {h: 42, s:true}; 
var {h:foo, s:bar} = o; 
console.log(foo, bar); 
console.log(o.h, o.s);
//=============================================================================================================== 
let obj = {id:42, name: 'Jack'}; 
let { id = 10, age = 20 } = obj; 
console.log(obj.id, obj.name); 
console.log(id, age); 
//===============================================================================================================
let obj = {a:10}; 
let{a:b = 20} = obj; 
console.log(obj.a, b); //10 10