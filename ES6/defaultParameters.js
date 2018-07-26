function test (a, b = 3, c = 42){
    return a+ b + c; 
} 
console.log(test(2)); 


/* 
Default value expressions are evaluated at function call time from left to right. 
This also means that default expressions can use the values of previously-filled parameters.
*/