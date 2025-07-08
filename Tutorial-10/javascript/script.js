// This keyword inside eventListener callback

// const addButton = document.querySelector('.btn');
// console.log(addButton);
// addButton.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("Button Clicked");
//     console.log(this);
// })



// Add events on multiple elements

// const allButtons = document.querySelectorAll('.todo-buttons button');
// console.log(allButtons);

// for(let button of allButtons) {
//     button.addEventListener("click", () => {
//         console.log(button.textContent+" Button Clicked..");
//     });
// }


// Event object

// const button1 = document.querySelector(".done")
// button1.addEventListener("click", function(info){
//     console.log(info);
// })




// How event listener works

const allButtons = document.querySelectorAll('.todo-buttons button');
console.log(allButtons);

allButtons.forEach((button)=> {
    button.addEventListener("click", function(){
        console.log(this);
    })
})


// Practice with events






// Create demo project






// More events






// Event bubbling






// Event Capturing






// Event delegation 





