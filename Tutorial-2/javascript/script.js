// 1 - push, pop, unshift, shift

// Theory - push pop is faster than shift, unshift. shift, unshift will store the data first and then it will perform the operation and in opposite push, pop will directly perform operation without storing.

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// Theory - push will add the element at the last of array

// fruits.push("banana");
// console.log(fruits);

// Theory - pop will remove the last elements of the array and will also retur the popped element

// let poppedElement = fruits.pop();
// console.log(poppedElement, "is last element & removed using pop()");
// console.log(fruits);

// Theory - unshift will add the element at the start of the array

// fruits.unshift("strawberry");
// console.log(fruits);

// Theory - shift will remove the starting element of the array & will also return the removed element

// let shiftedElement = fruits.shift();
// console.log(shiftedElement, "is starting element & removed using shift()");

// console.log(fruits);
// console.log("hello");

// 2 - Primitive and Reference type

// Theory - here num1, num2 will be stored in STACK separately. So after the value change in num1 the num2 will not access the updated value as in stack num2 is storing the old value of num1

// let num1 = 40;
// let num2 = num1;
// console.log('Value of num1:- ',num1);
// console.log('Value of num2:- ',num2);
// num1++;
// console.log('Value of num1:- ',num1);
// console.log('Value of num2:- ',num2);

// Theory - Here using Array it will store the data in HEAP and in STACK it will store the pointer of array1 address of heap. Now array2 will have same pointer as array1 so whatever changes happen in array1. array2 can show that changes.

// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("Array1:- ",array1);
// console.log("Array2:- ",array2);
// array1.push("item3");
// console.log("Array1:- ",array1);
// console.log("Array2:- ",array2);

// 3 - Clone Array, Concate Array, Spread operator

// Theory - using slice(0) we can get the another array. Here in slice it will start from 0th place till the end. slice(0) is faster in performance wise.
// Method 1 - clone array using slice(0)

// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// array2.push("item3")
// console.log("Array 1:-",array1);
// console.log("New Array cloned from Array1 using Method1 with slice(0):-",array2);

// Method 2 - clone array using cancat()

// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// array2.push("item3")
// console.log("Array 1:-",array1);
// console.log("New Array cloned from Array1 using Method2 with concat() method:-",array2);

// Method 3 (new way) - clone array using  SPREAD operator

// let array1 = ["item1", "item2"];
// let array2 = [...array1];
// array2.push("item3");
// console.log("Array 1:-",array1);
// console.log("New Array cloned from Array1 using Method2 with spread operator(...array1):-",array2);

// Add extra data using concat with slice(0)

// let array1 = ["apple", "banana", "grapes"];
// let array2 = array1.slice(0).concat(["mango", "strawberry"]);
// console.log(array2);

// Add extra data using in spread operator without concat()

// let array1 = ["apple", "mango","grapes"];
// let extraArray = ["banana", "strawberry"];
// let array2 = [...array1, ...extraArray, "oranges"];
// console.log(array2);





// 4 - For loop in Array

// let array1 = ["apple", "mango","grapes"];
// let array2 =[];
// for(let i=0; i < array1.length ; i++) {
//     array2.push(array1[i].toUpperCase());
// }
// console.log("Array2 in uppercase:-",array2);
// console.log("Default Array1:-",array1);

// 5 - Creating array using const
// Thoery - as even after using const the value is been changed because array is stored in heap and the address of the heap array is tored in STACK. so value change function is happening in heap instead of stack.

// const fruits = ["apple", "banana", "mango"];
// fruits.push("grapes");
// console.log(fruits);

// 6 - while loop in array

// const fruits = ["apple", "banana", "mango"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length) {
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);

// 7 - For of loop , for in loop
// Theory - in "for of" it will iterate over the values of the iterable object(here - fruits). In "for in" it will ietrate over the values and return its index value

// console.log("Using 'for of' for getting actual values");
// const fruits = ["apple", "banana", "mango"];
// for(let fruit of fruits) {
//     console.log(fruit);
// }

// console.log("Using 'for in' for getting the index value");
// for(let index in fruits) {
//     console.log(index);
// }

// 8 - Array destructuring

// const fruits = ["apple", "banana", "mango", "grapes"];
// let [fruitval1, fruitval2, ...fruitsArray] = fruits;
// console.log("Value of fruitval1:-",fruitval1);
// console.log("Value of fruitval2:-",fruitval2);
// console.log("Remaining value are stored in fruitsArray",fruitsArray);

// 9 - objects
// Theory - Objects are Referenced type. Object store key value pairs. object don't have index.

// const person = {
//     name: "Smit",
//     age: "22",
//     number: "819",
//     hobbies: ["Reading book", "Outdoor games", "Watching Anime"],
// }

// Adding a key value pair
// person.role = "Intern";

// console.log(`My name is ${person.name} and age is ${person.age}. My Enrollment number is ${person.number}. My Hobbies are ${person.hobbies}. My current role is ${person.role}`);

// console.log("My name is "+person["name"]+".","My Age is "+person["age"]+".");

// 10 - dot vs bracket notation

// Using bracket in 'Enrollment number'
// const person = {
//     name: "Smit",
//     age: "22",
//     "enrollment number": 819,
//     hobbies: ["Reading book", "Outdoor games", "Watching Anime"],
// }

// const key = "email";
// person[key] = 'test@gmail.com'

// console.log(person);

// console.log(`My name is ${person.name} and age is ${person.age}. My Enrollment number is ${person['enrollment number']}. My Hobbies are ${person.hobbies}. My email address is ${person.email}`);

// 11 - Iterate objects

// const person = {
//     name: "Smit",
//     age: "22",
//     number: "819",
//     hobbies: ["Reading book", "Outdoor games", "Watching Anime"],
// }

// for(let key in person) {
//     console.log(`Key:- ${key}, Values is ${person[key]}`);
// }

// 12 - Computed objects

// Expected output -
// const myDetail = {
//              name: Smit,
//              age: 22,
// }

// const key1 = "name";
// const key2 = "age";

// const value1 = "Smit";
// const value2 = "22";

// const myDetail = {
//     [key1] : value1,
//     [key2] : value2,
// }

// console.log(myDetail);

// 13 - Spread operator in objects

// const obj1 = {
//   key1: "value1",
//   key2: "value2",
// };

// const obj2 = {
//   key3: "value3",
//   key4: "value4",
//   key1: "value change",
// };

// const newObject = { ...obj1, ...obj2, key5: "value5" };
// console.log(newObject);

// const name = { ..."Smit" };
// console.log(name);



// 14 - Object destructuring
// object name : new variable name (name:myName)

// const myDetail = {
//   name: "Smit",
//   age: "22",
//   number: "819",
//   hobbies: ["Reading book", "Outdoor games", "Watching Anime"],
// };

// const {name:myName, age:myAge} = myDetail;

// console.log(`My name is ${myName}. My age is ${myAge}`);



// 15 - Object inside array

// const myDetail = [
//     {id: 10, name: 'Smit', gender: 'male'},
//     {id: 11, name: 'Parth', gender: 'male'},
//     {id: 12, name: 'vidhi', gender: 'female'},
// ]

// for(let i=0 ; i < myDetail.length ; i++) {
//     console.log(myDetail[i]);
// }


// for(let detail of myDetail) {
//     console.log(detail['name']);
// }

// console.log(myDetail);



// 16 - Nested destructuring

const myDetail = [
    {id: 10, name: 'Smit', gender: 'male'},
    {id: 11, name: 'Parth', gender: 'male'},
    {id: 12, name: 'vidhi', gender: 'female'},
]

const [{id, name, gender}, user2, user3] = myDetail; 

// const {id, name, gender} = user1;

// console.log(user1);
console.log(user2);
console.log(user3);

console.log(`My id is ${id}, name is ${name}, and gender is ${gender}.`);