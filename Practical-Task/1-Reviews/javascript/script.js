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

function updateButtons() {

  // previous button
  if (currentItem === 0) {
    prevBtn.classList.add("disabled");
    prevBtn.disabled = true;
  } else {
    prevBtn.classList.remove("disabled");
    prevBtn.disabled = false;
  }

  // next button
  if (currentItem === userData.length - 1) {
    nextBtn.classList.add("disabled");
    nextBtn.disabled = true;
  } else {
    nextBtn.classList.remove("disabled");
    nextBtn.disabled = false;
  }
}

// Using DOMContentLoaded, our first dynamic data would be access in HTML file.
window.addEventListener("DOMContentLoaded", function () {
  updateData(userData[currentItem]);
  updateButtons();

  prevBtn.addEventListener("click", function () {
    if (currentItem > 0) {
      currentItem--;
      updateData(userData[currentItem]);
      updateButtons();
    }
  });

  nextBtn.addEventListener("click", function () {
    if (currentItem < userData.length - 1) {
      currentItem++;
      updateData(userData[currentItem]);
      updateButtons();
    }
  });

  surpriseBtn.addEventListener("click", function () {
    let randomValue = Math.floor(Math.random() * userData.length);
    currentItem = randomValue;
    updateData(userData[randomValue]);
    updateButtons();
  });
});
