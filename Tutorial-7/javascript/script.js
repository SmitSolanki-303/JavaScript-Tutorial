// 1 - Global Execution context
// 2 - This & window in global execution context



// console.log(this); 
// console.log(window);
// console.log(myFunction);
// console.log(fullName);
// function myFunction() {
//     console.log('hello world');
// }

// var fname= 'smit';
// var lname= 'solanki';
// var fullName = fname + ' ' + lname;
// console.log(fullName);







// 3 - Hoisting
// Theory  - myFunction() is already been hoisted or stored in global memory before execution during the CREATION PHASE, so it can be called before its declaration.

// console.log(this); 
// console.log("myFunction() is already been hoisted");
// myFunction();
// console.log(window);
// console.log(myFunction);
// console.log(fullName);
// function myFunction() {
//     console.log('hello world');
// }

// var fname= 'smit';
// var lname= 'solanki';
// var fullName = fname + ' ' + lname;
// console.log(fullName);




// 5 - Are let and const are hoisted? What is reference error?

   
// console.log(myName);
// let  myName = 'Smit Solanki';
// console.log(myName);


 

// TDZ - Temporal Dead Zone - It is the time between the declaration of a variable and its initialization. During this time, if you try to access the variable, you will get a ReferenceError.


// 6 - Function execution context - 

// 9 - Closuer Ex1



// let foo = 'foo';
// console.log(foo);
// function getFullName(fname, lname) {
//     console.log(arguments);
//     let myVar = 'var inside function';
//     console.log(myVar);
//     const fullName = fname + ' ' + lname;
//     return fullName;
// }

// const personName = getFullName("Smit", "Solanki");
// console.log(personName);





// 10 - Closure Ex2

const lname = 'Solanki';
const printName = function() {
    const fname = 'Smit';
    console.log(fname);
    console.log(lname);
}

printName()

// Here, lname dont have value in local memory of printName function, but it is still able to access lname variables value from the global execution context. This is because of closure.


