var hamburgerMenu = document.querySelector(".hamburger-menu");
var collapseHeader = document.querySelector(".collapse-header");
var collapseLinks = document.querySelector(".collapse-links");

hamburgerMenu.addEventListener("click", function () {
  if (collapseHeader.style.maxHeight) {
    collapseHeader.style.maxHeight = null;
  } else {
    collapseHeader.style.maxHeight = collapseHeader.scrollHeight + "px";
  }
});
