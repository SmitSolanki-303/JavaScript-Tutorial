import userData from './userData.js'

console.log(userData);

var userImage = document.querySelector(".avatar-image");
var infoTitle = document.querySelector(".info-title");
var infoRole = document.querySelector(".info-role");
var infoDescription = document.querySelector(".info-desc")

// buttons
var leftArrow = document.querySelector(".fa-angle-left");
var rightArrow = document.querySelector(".fa-angle-right");
var surpriseBtn = document.querySelector(".primary-btn")

userData.forEach()

leftArrow.addEventListener("click", function() {
    console.log("left click");
})

rightArrow.addEventListener("click", function() {
    console.log("right click");
})

surpriseBtn.addEventListener("click", function(){
    console.log("button click");
})