// 1 - Function Declaration

// Sum of 3 number

// function sumThreeNumber(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// const total = sumThreeNumber(1, 5, 10);
// console.log(total);

// Check Even / Odd

// function checkEvenOdd(num) {
//     if(num%2==0) {
//         console.log(`${num} is Even`);
//     }
//     else {
//         console.log(`${num} is Odd`);
//     }
// }
// checkEvenOdd(5);

// Return first character of the String

// function firstCharacter(str) {
//     str = str.slice(0,1)
//     return str;
// }
// console.log(firstCharacter("Smit"));

// Find number from the array

// function findNumber(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] == target) {
//       return i + 1;
//     }
//   }
//   return target;
// }
// const array = [8, 1, 6, 9, 0, 5, 7];
// const position = findNumber(array, 1);
// if (position < array.length) {
//   console.log("Position of target number is "+position);
// }
// else {
//     console.log(+position+" is not in the array");
// }



// 2 - Function Expression
// Theory - Here this function() is an anonymous function but it is store in the variable so we can say that it is variable name is treated as function name.

// const sumTwoNumber = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(sumTwoNumber(5,12));



// 3 - Arrow Function

// const isEven = (number) => {
//     if(number%2==0){
//         return true;
//     }
//     return false;
// }
// console.log(isEven(3));



// 4 - Hoisting
// Theory - In Function Expression it cannot be access before initialization. But in function declaration it can access before initialization




// 5 - Function inside Function

// const parentFunction = () => {
//     const childFunction = (num1, num2) => {
//         return num1 + num2;
//     }
//     console.log("Inside parent function");
//     console.log("Sum of two number is done by childFunction:- "+childFunction(5,2));
// }
// parentFunction();



// 6 - Lexical Scope
// Theory - the value of 'val will be access by from there initialization, but if there is not initialization in chileFunction then it will check the lexical scope and will find the value with same variable.

// function myFunction() {
//   const val = 5;

//   function insideFunction() {
//     const val = 10;
//     console.log("Inside Child Function, Value:- " + val);
//   }
//   console.log("Value:- " + val);
//   console.log("Inside Parent Function");

//   insideFunction();
// }
// myFunction();



// 7 - Block scope vs Function Scope
// Theory - let & const are block scope. var is function scope. 
// Here, let and const value can be access only with the " { } " called block. if we used 'var' then it can be access all over the function even in the other block that cant be accessed normally using let and const.

// function myFunction() {
//     if(true){
//         var name = "smit"
//         console.log(name);
//     }

//     if(true) {
//         console.log(name);
//     }

//     console.log(name);
// }
// myFunction();



// 8 - Default Parameter
// Theory - Here usig Default Parameter in 'b=0'. if user doesnot give another parameter in function then the default value will be used.

// function myFunction(a,b=0) {
//     return a+b;
// }
// const answer = myFunction(1)
// console.log(answer);



// 9 - Rest Parameter

// function myFunction(a, b, ...c) {
//     console.log(a);        
//     console.log(b);         
//     console.log(c);         
// }
// myFunction(2,3,4,10,65,45,11,55)

// function addAll(...numbers) {
//     let total = 0;
//     for(let number of numbers) {
//         total = total + number;
//     }
//     console.log(total);

// }
// addAll(1,2,3,4,5,6,7,8,9)




// 10 - Parameter Destructuring

// const userDetail = {
//     name: "Smit",
//     age: 22,
// }

// function getDetail({ name, age, gender= "male" }) {
//     console.log(`My name is ${name}`);
//     console.log(`My age is ${age}`);
//     console.log(`My gender is ${gender}`);
// }
// getDetail(userDetail);



// 11 - Callback Function
// Theory - Function-1 will be pass as an parameter to function-2. And that passd function-1 can be called inside the function-2.

// function function1(callback) {
//     console.log("Inside Function 1");

//     callback("Smit");
// }

// function function2(value) {
//     console.log("Inside Function 2 called from Function 1");
//     console.log(`${value} is passed from the Function 1`);
// }

// function1(function2);




// 12 - Function Returning Function

// function parentFunction() {

//     function childFunction() {
//         console.log("From Child Function");
//     }

//     return childFunction;
// }

// const returnFunction = parentFunction();

// // console.log(returnFunction);
// returnFunction();
