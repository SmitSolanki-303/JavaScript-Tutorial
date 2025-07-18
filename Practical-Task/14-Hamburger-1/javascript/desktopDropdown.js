// Desktop Hover Dropdown
function desktopDropdown() {
  const body = document.querySelector("body");
  const selectedItem = document.querySelectorAll(".nav-item");
  const serviceSelected = selectedItem[1];
  const arrow = document.querySelector(".fa-angle-down");
  const dropdownData = document.querySelector(".dropdown-list");

  // Function
  function showDropdown() {
    // console.log("mouse enter");
    arrow.classList.add("arrow-rotate");
    dropdownData.classList.add("show");
    body.classList.add("noScroll");
  }

  function hideDropdown() {
    // console.log("mouse leave");
    arrow.classList.remove("arrow-rotate");
    dropdownData.classList.remove("show");
    body.classList.remove("noScroll");
  }

  // Event Listener
  serviceSelected.addEventListener("mouseenter", showDropdown);
  serviceSelected.addEventListener("mouseleave", hideDropdown);
}

export default desktopDropdown;
