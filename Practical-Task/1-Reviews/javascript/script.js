import userData from "./userData.js";

console.log(userData);

var userImage = document.querySelector(".avatar-image");
var infoTitle = document.querySelector(".info-title");
var infoRole = document.querySelector(".info-role");
var infoDescription = document.querySelector(".info-desc");
var background = document.querySelector(".section-body");

// buttons
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var surpriseBtn = document.querySelector(".primary-btn");

// Select the first user
let currentItem = 0;

function updateData(info) {
  userImage.src = info.userImage;
  infoTitle.textContent = info.fullname;
  infoRole.textContent = info.role;
  infoDescription.textContent = info.description;
  background.style.background = info.bgColor;
}

// Using DOMContentLoaded, our first dynamic data would be access in HTML file.
window.addEventListener("DOMContentLoaded", function () {

  // Getting the first index of user data
  const info = userData[currentItem];
  console.log(info);

  updateData(info);

  // Previous Button
  prevBtn.addEventListener("click", function () {
    currentItem--;

    // if the current item is less than 0
    if (currentItem < 0) {
        // Assign value back to last index
        currentItem = userData.length-1;
    }

    // console.log(currentItem);
    const info = userData[currentItem];
    console.log(info);

    updateData(info);
  });

  // Next Button
  nextBtn.addEventListener("click", function () {
    currentItem++;

    // if the current item is greater than the array length
    if (currentItem >= userData.length) {
      // Assign value back to Start index (0)
      currentItem = 0;
    }

    // console.log(currentItem);
    const info = userData[currentItem];
    console.log(info);

    updateData(info);
  });

  surpriseBtn.addEventListener("click", function () {
    // get the random value within (0, 7)
    let value = random(0, userData.length - 1);

    // Convert the float value into integer value of random
    let randomValue = parseInt(value);


    for (let i = 0; i < userData.length; i++) {
      // check if the current index is equal to random value and use that user data
      if (i === randomValue) {
        const info = userData[i];
        console.log(info);

        updateData(info);
      }
    }
  });

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
});