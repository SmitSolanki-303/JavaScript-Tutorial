import userData from "./userData.js";

console.log(userData);

var userImage = document.querySelector(".avatar-image");
var infoTitle = document.querySelector(".info-title");
var infoRole = document.querySelector(".info-role");
var infoDescription = document.querySelector(".info-desc");

// buttons
var prevBtn = document.querySelector(".prev-btn");
var nextBtn = document.querySelector(".next-btn");
var surpriseBtn = document.querySelector(".primary-btn");

// Select the first user
let firstIndex = 0;


function updateData(info) {
  userImage.src = info.userImage;
  infoTitle.textContent = info.fullname;
  infoRole.textContent = info.role;
  infoDescription.textContent = info.description;
}

// Using DOMContentLoaded, our first dynamic data would be access in HTML file.
window.addEventListener("DOMContentLoaded", function () {
  const info = userData[firstIndex];
  console.log(info);

  updateData(info);

  prevBtn.addEventListener("click", function () {
    firstIndex--;

    if (firstIndex == -1) {
      firstIndex = 3;
    }

    // console.log(firstIndex);
    const info = userData[firstIndex];
    console.log(info);

    updateData(info);
  });

  nextBtn.addEventListener("click", function () {
    firstIndex++;

    if (firstIndex === 4) {
      firstIndex = 0;
    }

    // console.log(firstIndex);
    const info = userData[firstIndex];
    console.log(info);

    updateData(info);
  });

  surpriseBtn.addEventListener("click", function () {

    // get the random value
    let value = random(0, userData.length - 1);

    // Convert the float value into integer value of random
    let randomValue = parseInt(value);


    for (let i = 0; i < userData.length; i++) {
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
