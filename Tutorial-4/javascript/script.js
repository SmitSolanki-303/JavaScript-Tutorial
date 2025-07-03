// 1 - ForEach Method

// const number = [2,5,8,3,6,9];
// function multiplyTwo(number, index) {
//     console.log(`${number}*2 = ${number*2} and its index is ${index}`);
// }
// number.forEach(multiplyTwo)

// const names = ["Smit", "Ravi", "Dev", "Deep", "Ashay"];
// names.forEach(function(name, index) {
//     console.log(`${name} and its index number is ${index}.`);
// })
 
// const users = [
//     {name: "Smit" , age: 22},
//     {name: "Ashay" , age: 21},
//     {name: "Ani" , age: 20},
//     {name: "Ashish" , age: 23},
//     {name: "Adi" , age: 22},
//     {name: "Udit" , age: 20},
// ]
// const getNames = (user) => {
//     console.log(`${user.name} and its age is ${user.age}`);
// }
// users.forEach(getNames);



// 2 - Map Method

// const numbers = [1,2,3,4,5,6,7,8]

// const square = (number) => {
//     return number * number;
// }
// const squaredNumber = numbers.map(square);
// console.log(squaredNumber);

// const users = [
//     {name: "Smit" , age: 22},
//     {name: "Ashay" , age: 21},
//     {name: "Ani" , age: 20},
//     {name: "Ashish" , age: 23},
//     {name: "Adi" , age: 22},
//     {name: "Udit" , age: 20},
// ]

// const userName = (user) => {
//     return user.name ;
// }

// const names = users.map(userName);
// console.log(names);



// 3 - Filter Method

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13]

// const isOdd = (number) => {
//     return number%2!==0;
// }
// const oddNumber = numbers.filter(isOdd);


// const evenNumber = numbers.filter((number) => {
//     return number%2==0;
// })

// console.log(oddNumber);
// console.log(evenNumber);




// 4 - Reduce Method
// Theory - in Reduce, we use 'accumulator' and 'currentValue', For first time when it is returned it will return the sum of both value. Next time when it is calculated again then it will sum the previous returned value with the new currentValue.

// const numbers = [1,2,3,4,5];
// const total = numbers.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue;
// })
// console.log(total);


// const userCart = [
//     {productId: 1, productName: "Mobile", price: 15000},
//     {productId: 2, productName: "Laptop", price: 67000},
//     {productId: 3, productName: "TV", price: 35000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentValue) => {
//     return totalPrice +  currentValue.price
// },0);
// console.log(totalAmount);




// 5 - Sort Method
// Theory - In JavaScript, it will sort the element based on their first character ASCII value wether it is string or number.

// const Products = [
//     {productId: 1, productName: "P1", price: 15000},
//     {productId: 2, productName: "P2", price: 67000},
//     {productId: 3, productName: "P3", price: 350},
//     {productId: 4, productName: "P4", price: 3500},
//     {productId: 5, productName: "P5", price: 5000},
//     {productId: 6, productName: "P6", price: 100},
// ]


// const lowToHigh = Products.slice(0).sort((a,b) => {
//     return  a.price - b.price;
// });
// console.log(lowToHigh);

// const highToLow = Products.slice(0).sort((a,b) => {
//     return  b.price - a.price;
// });
// console.log(highToLow);




// 6 - Find Method

// const myArray = [ "cat", "dog","lion", "cow"]
// const word = myArray.find((str)=> {
//     return str.length === 4;
// })
// console.log(word);

// Find the particular user from userId

// const userDetail = [
//     {userId: 1, userName: "Smit"},    
//     {userId: 2, userName: "Ashay"},    
//     {userId: 3, userName: "Ashish"},    
//     {userId: 4, userName: "Anirudh"},    
//     {userId: 5, userName: "Aditya"},    
//     {userId: 6, userName: "Udit"},    
// ]
// const userInfo = userDetail.find((user)=> {
//     return user.userId === 3;
// });
// console.log(userInfo);



// 7 - Every Method
// Theory - In 'every' method it will check if every element is right as per the condition then it is true. If even single element condition doesnot match then it will return false.

// const numbers = [2,4,6,8,10,11];
// const evenNumber = numbers.every((number)=> {
//     return number%2==0;
// });
// console.log(evenNumber);

// const Products = [
//     {productId: 1, productName: "P1", price: 15000},
//     {productId: 2, productName: "P2", price: 27000},
//     {productId: 3, productName: "P3", price: 35000},

// ]

// const checkPrice = Products.every((product)=> {
//     return product.price < 30000;
// });
// console.log(checkPrice);


// 8 - Some Method
// Theory - In 'some' method it will check even single element is present as per the condition then it is true. If it is not present then only it will return false.

// const numbers = [2,4,6,8,10];

// const answer = numbers.some((number)=>{
//     return number%2!==0;
// });

// console.log(answer);


// Check any product whose price is more than 1Lakh

// const Products = [
//     {productId: 1, productName: "P1", price: 15000},
//     {productId: 2, productName: "P2", price: 27000},
//     {productId: 3, productName: "P3", price: 35000},
//     {productId: 4, productName: "P4", price: 135000},
// ]

// const highPriceProduct = Products.some((product)=> {
//     return product.price > 100000;
// })
// console.log(highPriceProduct);




// 9 - Fill Method
// Theory - For manually filling the array value it should follow the process fill(value, starting, ending). For required ending value to be fill increment the ending value with one.

// const myArray = new Array(5).fill(819);
// console.log(myArray);

// const myArray = [0,1,5,13,4,50,6];
// myArray.fill(-1, 2, 5);
// console.log(myArray);




// 10 - Splice Method
// Theory - Splice method is used to insert or delete any any element between the array. In splice the process should be follow splice(start, delete(in number), insert(value thats need to be inserted after delete)). Here, starting would be index number of array, number of element you want to delete from array in number, and insert any element after delertion.

// const myArray = ["dog", "lion", "tiger", "cat"];

// myArray.splice(1, 2);

// console.log(myArray);