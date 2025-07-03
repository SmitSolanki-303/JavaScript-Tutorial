// 1 - Iterable & array-like object
// Theory - 'Iterable' are those where we can use for of loop. Ex- string, array. 'Array like object' are those who has the length property. And using index we can access them. Ex- string

// const name = "Smit";
// for(let char of name) {
//     console.log(char);
// }

// const numbers = [90,66,91,14,47]
// for(let number of numbers) {
//     console.log(number);
// }



// 2 - Set
// Theory -  Set store data, it has its own methods and it is Iterable. Set is not an index based access. Set store unique value and remove if there is any duplicates.


// Finding the length of values given by SET.

// const numbers = [91,66,91,4,47,4, 11]

// const uniqueNumber = new Set(numbers);
// console.log(uniqueNumber);

// let i = 0;
// for (let element of uniqueNumber) {
//     console.log(element);
//     i++;
// }
// console.log(`there are total ${i} values present in SET `);



 
// 3 - Map

// Theory - Map is an iterable, store data in ordered way. Map store data into key value pairs. In maps, we can use anything as key like array, number, string.

// const user = {
//     name: "Smit",
//     age: 22,
//     1: 'one'
// }

// console.log(typeof user[1]);

// const person = new Map();
// person.set('name', 'Smit');
// person.set('age', 819);
// person.set(1, 'one');
// person.set(1, 'one');

// console.log(person);
// // Destructuring the Array
// for(let [key, value] of person) {
//     console.log(key, value);
// }


// const person1 = {
//     id: 1,
//     name: 'Smit',
// }

// const person2 = {
//     id: 810,
//     name: "Adi",
// }

// const extraInfo = new Map();

// //              key    :   value
// extraInfo.set(person1, {age: 22, gender: 'male'})
// console.log(extraInfo);
// console.log(extraInfo.id);
// console.log(extraInfo.get(person1).gender);

// //              key    :   value
// extraInfo.set(person2, {hobby: 'Gaming', age: 20});
// console.log(person2.id);
// console.log(extraInfo.get(person2).age);




// 4 - Clone object

// const obj1 = {
//     key1 : 'value1',
//     key2 : 'value2',
// }

// // const obj2 = {...obj1};
// const obj2 = Object.assign({}, obj1)

// obj1.key4="value4";
   
// console.log(obj1);
// console.log(obj2);



// 5 - Optional Chaining   
// Theory - Mostly used in React as for State management. 

const user = {
    id: 819,
    name: 'Smit',
    // address: {flatNumber: '21'},
}

console.log(user.id);
console.log(user.name);
console.log(user?.address?.flatnumber);


// Note - Using '?' it will check if the required element is present or not. If it isn't present then it will return 'undefined' without proceeding further. In above example- first it will check 'user is present or not. it is present then it will further check inside if the 'address element is present if it is present then go further but if it isnot present then on that particular spot return 'undefined'.