// 1 - if else

// let winningNumber = 20;

// let userNumber = +prompt("Enter your guess between (1 to 20)");

// if (userNumber === winningNumber) {
//     console.log("Your guessed number is right.");
// } else if (userNumber >= 15 ) {
//     console.log("your number is very close.");
// } else if (userNumber <= 15) {
//     console.log("your number is too low.");
// } else {
//     console.log("Your guess is wrong");
// }

//  if else

// let temp = -1

// if (temp < 0) {
//     console.log("Extremely Cold!!");
// } else if(temp < 15) {
//     console.log("Cold!");
// } else if (temp < 25) {
//     console.log("normal");
// } else if (temp < 35) {
//     console.log("hot");
// } else {
//     console.log("Extremely Hot");
// }



// 2 - switch case

// let day = +prompt("Enter the number from 0 to 6. To know what day would come.");

// switch (day) {
//   case 0:
//     console.log(`${day} is Sunday`);
//     break;

//   case 1:
//     console.log(`${day} is Monday`);
//     break;

//   case 2:
//     console.log(`${day} is Tuesday`);
//     break;

//   case 3:
//     console.log(`${day} is Wednesday`);
//     break;

//   case 4:
//     console.log(`${day} is Thursday`);
//     break;

//   case 5:
//     console.log(`${day} is Friday`);
//     break;

//   case 6:
//     console.log(`${day} is Saturdey`);
//     break;

//   default:
//     console.log(`${day} is not a valid option. Select from (0 to 6 only).`);
// }



// 3 - While Loop

// Print 0 to 9
// let limit = +prompt("Enter how many number you want to see in console.")
// let i = 1;
// while(i <= limit) {
//     console.log(i);
//     i++;
// }

// console.log(`${i -1} times the while loop run.`);

// Sum of natural numbers
// let n = +prompt("Enter number:-")

// let i=1, sum=0;
// while (i <= n) {
//     sum = sum + i;
//     i++;
// }

// console.log(`Sum all numbers:- ${sum}`);



//  4 - For loop

// let limit = 10;
// let total = 0;

// for(let i = 0; i <= limit; i++) {
//     total = total + i;
// }

// console.log(`Summation of all number are: ${total}`);


// list all number except even number.all

// let limit = 10;
// console.log("Number after skipping EVEN number");
// for(let i = 0; i <= limit; i++) {
//     if(i % 2 == 0) {
//         continue;
//     }
//     console.log(i);
// }



// 5 - do while 

let limit = 15;
let i = 1;

do {
    console.log(i);
    i++;
} while(i <= limit)