var collapseHeader = document.querySelector(".collapse-sidebar");
var openMenu = document.querySelector(".hamburger-menu");
var closeMenu = document.querySelector(".close-menu");

openMenu.addEventListener("click", function () {
  if (collapseHeader.style.transform == "translateX(0px)") {
    collapseHeader.style.transform = "translateX(-300px)";
  } else {
    collapseHeader.style.transform = "translateX(0px)";
  }
});

closeMenu.addEventListener("click", function () {
  collapseHeader.style.transform = "translateX(-300px)";
});
