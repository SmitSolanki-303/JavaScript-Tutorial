var selectedItem = document.querySelectorAll(".nav-item");

// // Service is selected
var serviceSelected = selectedItem[1];

var arrow = document.querySelector(".fa-angle-down");
var dropdownData = document.querySelector(".dropdown-list");

serviceSelected.addEventListener("mouseenter", function () {
  arrow.classList.add("arrow-rotate");
  dropdownData.classList.add("dropdown-show");
  console.log("mouse enter");
});

serviceSelected.addEventListener("mouseleave", function () {
  arrow.classList.remove("arrow-rotate");
  dropdownData.classList.remove("dropdown-show");
  console.log("mouse leave");
});

var languageSelect = document.querySelector(".select-dropdown");
var selectDropDown = document.querySelector(".select-dropdown-list");
// console.log(selectDropDown);

var languageItem = document.querySelectorAll(".select-dropdown-item");
// var value;

languageSelect.addEventListener("mouseenter", function () {
  selectDropDown.classList.add("select-dropdown-show");
});

languageSelect.addEventListener("mouseleave", function () {
  selectDropDown.classList.remove("select-dropdown-show");
});

for (let language of languageItem) {
  language.addEventListener("click", function () {
    var value = this.textContent;
    console.log(value);

    const languageTitle = document.getElementById("selectDropdownTitle");

    console.log(languageTitle.textContent = value);
  });
}


// Toast 
var heroBtn = document.querySelector("#heroBtn");
var toastMessage = document.querySelector(".toast-message");

function showToast() {
  toastMessage.classList.add("toast-message-show");
}


heroBtn.addEventListener("click", ()=>{
  showToast();

  // Remove the toast after 3seconds
  setTimeout(()=>{
    toastMessage.classList.remove("toast-message-show")
  },3000);
})