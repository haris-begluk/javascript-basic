//A Promise is a better way for asynchronous programming when compared to the common way of 
//using a setTimeout() type of method. 
//ES2015
setTimeout(function(){
    console.log("Work 1"); //second
    setTimeout(function(){
        console.log("Work 2");//third
    }, 1000);
},1000); 
console.log("end");//fist 
//============================================================================================== 
new Promise(function(resolve, reject){
    //Work 
    if(success)
    resolve(result); 
    else 
    reject(Error("failure"));
}); 
/*Here, resolve is the method for success and reject is the method for failure.
If a method returns a promise, it's calls should use the then method which takes two methods as input;
one for success and the other for the failure.*/
//==============================================================================================
//If a method returns a promise, it's calls should use the then method which takes two methods as input; 
//one for success and the other for the failure
function asyncFunc(work){
    return new Promise(function(resolve, reject){
        if(work === "") 
        reject(Error("Nothing")); 
        setTimeout(function(){
                resolve(work);
        },1000);
    });
} 

asyncFunc("Work First").// Task 1
then(function(result){
    console.log(result); 
    return asyncFunc("Work Second"); //Task2
}, function(error){
    console.log(error);
}).then(function(result){
    console.log(result);
}, function(error){
    console.log(error);
}); 
console.log("End");
//==============================================================================================