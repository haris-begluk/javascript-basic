let tree = {
    height:10, 
    color: 'green', 
    grow(){
        this.height += 2; 
    }
}; 

tree.grow(); 
console.log(tree.height); //12 

//============================================================== 
let height = 5; 
let health = 100; 
let athlete = {
    height, 
    health
}; 
console.log(athlete.health + ' '+ athlete.height); 
console.log(height + ' ' + health); 
athlete.health++; 
athlete.height++; 
console.log(athlete.health + ' '+ athlete.height); 
console.log(height + ' ' + health);  
athlete.health+=3; 
athlete.height+=3;  
console.log(athlete.health + ' '+ athlete.height); 
console.log(height + ' ' + health);  
health--; 
height--; 
console.log(athlete.health + ' '+ athlete.height); 
console.log(height + ' ' + health);  
//==============================================================
let prop = 'name'; 
let id = '1234'; 
let mobile = '3345235'; 
let user = {
[prop] : 'Jack', 
[`user_${id}`]:`${mobile}`
}; 
console.log(user[prop] + ' ' + user[`user_${id}`] ); 
console.log(user.prop + ' ' + user.user_1234); 
//==============================================================
var i = 0; 
var a = {
    ['foo' + ++i ]:i,  
    ['foo' + ++i ]:i, 
    ['foo' + ++i ]:i
}; 
console.log(a['foo1'] + ' ' + i);
console.log(a['foo2'] + ' ' + i);
console.log(a['foo3'] + ' ' + i); 
//============================================================== 
var param = 'size'; 
var config = {
    [param]:12, 
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]:4
}; 
console.log( config.param); //undefined
console.log(config.mobileSize); // 4  
console.log(param); //size
console.log(config['mobileSize']);// 4
console.log(config['mobile12']); // undefined
console.log(config[param]); //12
console.log(config['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]); //4
/*
When creating an object by using duplicate property names, 
the last property will overwrite the prior ones of the same name. 
Duplicate property names generated a SyntaxError in ES5 when using strict mode.
 However, ES6 removed this limitation.
*/ 

var a = {x: 1, x: 2, x: 3, x: 4}; 
console.log(a.x); // 4
//==============================================================