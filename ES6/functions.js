//Functions 
function add(x,y){
    var sum = x+y; 
    console.log(sum);
} 
add(13,24); // function call 

//ES6 Function syntax 
const func = (x,y) =>{
    console.log('sum: '+ (x+y));
}
func(546,7645); 

const haos = x => "Welcome " + x;
const greet = x => console.log("Welcome " + x); 
greet("Jack");  

const z = () =>alert("HI");
const x = () =>console.log("Hello");
x(); 
//ES2015
var arr = [2,3,4,5,8,9]; 
arr.forEach(function(el){
    console.log(el * 2);
}); 
//ES6 
const arr = [2,3,4,5,8,9];  
arr.forEach(v => {
    console.log(v * 2);
});

