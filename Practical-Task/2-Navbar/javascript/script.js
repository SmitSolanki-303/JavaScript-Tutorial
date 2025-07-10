var hamburgerMenu = document.querySelector(".hamburger-menu");
var collapseHeader = document.querySelector(".collapse-header");
var collapseLinks = document.querySelector(".collapse-links");

hamburgerMenu.addEventListener("click", function () {
  if (collapseHeader.style.maxHeight) {
    hamburgerMenu.style.transform = "rotate(0deg)";
    collapseHeader.style.maxHeight = null;
    collapseHeader.style.display = "none";

  } else {
    hamburgerMenu.style.transform = "rotate(90deg)";
    collapseHeader.style.display = "inline-block";
    collapseHeader.style.maxHeight = collapseHeader.scrollHeight + "px";
  }
});
