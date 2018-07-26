//================================
//Variable Declaration
//================================
var a = 10; 
const b = 'hello'; 
let c = true;  
//================================
if(true){
    let name = 'Jack';
}  
alert(name); 
//================================ 
//Variable scope 
//================================ 
function varTest(){
    var x = 1; 
    if(true){
        var x = 2;  //same variable
        console.log(x); //2 
    } 
    console.log(x); //2
} 
//================================ 

function letTest(){
    let x = 1; 
    if(true){
        let x = 2;//different variable 
        console.log(x); //2
    } 
    console.log(x); //1
} 
//================================ 
//One of the best uses for let is in loops 
for(let i = 0; i < 5; i++){
    document.write(i);
} 
//================================ 
const a = 'Hello World'; 
a = 'Bye'; //error