// 1 - Methods
// 2 - this keyword

// Theory - Function() inside object is called method. Here, 'this' keyword refer to the object itself(that is 'person' object).

// In function, this will recognized to that object that is calling the functon. Example- person1.description() will refer to person1 object and this will refer to person1 object inside the function.

// function aboutMe(){
//     console.log(`My name is ${this.name} and I am ${this.age} years old.`);
// }

// const person1 = {
//     name: "Smit",
//     age: 22,
//     description: aboutMe,
// }

// const person2 = {
//     name: "Aditya",
//     age: 20,
//     description: aboutMe,
// }

// person1.description();
// person2.description()





// 3 - call, apply, bind
// Theory - '
 

// // call() - It is used to call a function with a given 'this' value and arguments provided individually.

// console.log("Using call() method:");
//  function aboutMe(gender = 'male') {
//     console.log(`My name is ${this.name} and I am ${this.age} years old and gender is ${gender}.`);
//   }

// const person1 = {
//   name: "Smit",
//   age: 22,
//   description: aboutMe
// };

// const person2 = {
//   name: "Aditi",
//   age: 20,
// };

// person1.description();
// person1.description.call(person2, "female")




// apply() - It is similar to call() but it takes an array as second argument instead of individual arguments.

// console.log("Using apply() method:");
// function aboutMe(hobby, gender) {
//     console.log(`My name is ${this.name} and I am ${this.age} years old. I am ${gender} and I like ${hobby}.`);
// }

// const user1 = {
//     name: "Smit",
//     age: 22,
// }

// aboutMe.apply(user1, ["coding", "male"])


// bind() - It is used to create a new function that, when called, has its 'this' keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// console.log("Using bind() method:");
 
// function aboutMe(hobby, gender) {
//     console.log(`My name is ${this.name} and I am ${this.age} years old. I am ${gender} and I like ${hobby}.`);
// }
// const user1 = {
//     name: "Smit",
//     age: 22,
// }

// const bindFunc = aboutMe.bind(user1, "coding", "male");

// bindFunc()



// 5 - this keyword inside arrow function

// const person = {
//     firstName: "Smit",
//     lastName: "Solanki",
//     email: "smit-test@gmail.com",
//     age: 22,
//     address: "Surat, Gujarat",
//     about: function() {
//         return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
//     },
//     is18 : function() {
//         return this.age >= 18;
//     }
// }

const userMethods = {
    aboutMe : function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`;
    },

    is18 : function(){
        return this.age >= 18;  
    }
}


function createUser(firstName, lastName, email, age, address) {
    const user = {}
     
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.aboutMe;
    // user.is18 = userMethods.is18;
    return user;
}

const user1 = createUser("Smit", "Solanki", "smit-test@gmail.com", 22, "Surat, Gujarat")

const user2 = createUser("Aditya", "singh", "adi@gmail.com", 20, "Surat, India");

console.log(user1.about());
console.log(user2.about());

// 6 - Short syntax for method

// 7 - Factory function & Discuss some memory related problem

// 8 - First solution of that problem

// 9 - What is __proto__[{prototype}]

// 10 - What is prototype

// 11 - Use Prototype

// 12 - New keyword

// 13 - Constructor function with new keyword

// 14 - More discussion about proto and prototype

// 15 - class keyword

// 16 - example of class keyword

// 17 - super keyword

// 18 - method overriding

// 19 - Getter & Setter

// 20 - Static method and properties
