// 1) Create a new JavaScript file and add these three functions

// Function Declaration
function add(n1, n2){
    return n1 + n2;
}
// Function Expression
const sub = function(n1,n2){
   return n1 - n2;
}
// Callback example
const cb1 = function(n1,n2,callback){
   return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
};
// 2) Call the functions above as sketched below. It’s not about doing it as fast as you can, but about understanding what's happening
console.log( add(1,2) )     // What will this print?
console.log( add )          // What will it print and what does add represent?
console.log( add(1,2,3) ) ; // What will it print
console.log( add(1) );	    // What will it print 	
console.log( cb1(3,3,add) ); // What will it print
console.log( cb1(4,3,sub) ); // What will it print
// console.log(cb(3,3,add())); // Fails because it is calling the function instead of passing a reference!
console.log(cb1(3,"hh",add));// What will it print

// 3)  Error Handling
// 7 will fail due to missing/wrong arguments. But it will fail at runtime, not as with Java, at compile time.
// Rewrite the Callback function expression (cb)  to make a check for all its three required arguments, and throw an Error if any of the arguments do not match as explained here.

const cb = function(n1,n2,callback){
    if(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function")
    return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
    else throw "Invalid arguments"
 };
// Surround the call to the function with a try-catch block, and provide a more user-friendly error message if the function throws an error
try {
    console.log(cb(1,1,sub()))
} catch (error) {
    console.log("ERROR: invalid arguments");
}
// More Callbacks 
// Take another look at the function expression declared in cb, and the provided callbacks in 5+6.
// What we have in cb is a very generic function that can take any callback that can do something with two numbers and return a value.
// 4) Write a mul(n1, n2) function (inspired by add and sub) and use it as the callback for the cb function
const mul = (n1,n2)=>n1*n2;
console.log(cb(2,3,mul));
// 5) Call cb, this time with an anonymous function that divides the first argument with the second
console.log(cb(9,3,(n1,n2)=>n1/n2));
