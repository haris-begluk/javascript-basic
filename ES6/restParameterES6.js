function containsAll(arr){ 
    //console.log(arr);
    //console.log(arguments);
    for(let k = 1; k <arguments.length; k++){
        let num = arguments[k]; 
        // console.log(num);
        if(arr.indexOf(num) === -1){
            return false;
        }
    } 
    return true;
} 
let x = [2, 4, 6, 9]; 
console.log(containsAll(x, 4, 9)); 
console.log(containsAll(x, 2, 4, 7)); 

//ES6  
//...nums parameter is called "rest parameter" ... are called "Spread operator" 
function containsAllES6(arr, ...nums){
    for(let num of nums){ 
       // console.log(num);
        if(arr.indexOf(num) === -1) 
        return false; 
    } 
    return true;
} 
console.log(containsAllES6(x, 4, 9)); 
console.log(containsAllES6(x, 2, 4, 7)); 
/*
Only the last parameter of a function may be marked as a rest parameter. If there are no extra arguments, 
the rest parameter will simply be an empty array; the rest parameter will never be undefined.
*/