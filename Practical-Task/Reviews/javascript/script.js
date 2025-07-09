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

// Using DOMContentLoaded, our first dynamic data would be access in HTML file.
window.addEventListener("DOMContentLoaded", function () {
  const info = userData[firstIndex];
  console.log(info);

  userImage.src = info.userImage;
  infoTitle.textContent = info.fullname;
  infoRole.textContent = info.role;
  infoDescription.textContent = info.description;

  prevBtn.addEventListener("click", function () {
    firstIndex--;

    if (firstIndex == -1) {
      // console.log("-1");
      firstIndex = 3;
    }

    console.log(firstIndex);
    const info = userData[firstIndex];
    console.log(info);

    userImage.src = info.userImage;
    infoTitle.textContent = info.fullname;
    infoRole.textContent = info.role;
    infoDescription.textContent = info.description;
  });

  nextBtn.addEventListener("click", function () {
    firstIndex++;

    if (firstIndex === 4) {
      // console.log(4);
      firstIndex = 0;
    }

    console.log(firstIndex);
    const info = userData[firstIndex];
    console.log(info);

    userImage.src = info.userImage;
    infoTitle.textContent = info.fullname;
    infoRole.textContent = info.role;
    infoDescription.textContent = info.description;
  });

  surpriseBtn.addEventListener("click", function () {
    console.log("button click");
    console.log(userData.length - 1);

    // get the random value
    let value = random(0, userData.length - 1);
    console.log(value);

    // Convert the float value into integer value of random
    let randomValue = parseInt(value);
    console.log(typeof randomValue);

    console.log(info);

    for (let i = 0; i < userData.length; i++) {
      if (i === randomValue) {
        console.log(i);
        const info = userData[i];
        console.log(info);

        userImage.src = info.userImage;
        infoTitle.textContent = info.fullname;
        infoRole.textContent = info.role;
        infoDescription.textContent = info.description;
      }
    }
  });

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }
});
