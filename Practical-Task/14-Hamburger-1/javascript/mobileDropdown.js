// Mobile Hover Dropdown
function mobileDropdown() {
  const body = document.querySelector("body");
  const selectedItem = document.querySelectorAll(".collapse-nav-item");
  const serviceSelected = selectedItem[1];
  // console.log(serviceSelected.textContent);
  const collapseDropdownData = document.querySelector(
    ".collapse-dropdown-list"
  );

  // Function
  function showDropdown() {
    // console.log("show mobile dropdown");
    // arrow.classList.add("collapse-arrow-rotate");
    collapseDropdownData.classList.add("show");
    body.classList.add("noScroll");
  }

  function hideDropdown() {
    // console.log("hide mobile dropdown");
    // arrow.classList.remove("collapse-arrow-rotate");
    collapseDropdownData.classList.remove("show");
    body.classList.remove("noScroll");
  }

  // Event Listener
  serviceSelected.addEventListener("click", function () {
    if (collapseDropdownData.classList.contains("show")) {
      hideDropdown();
    } else {
      showDropdown();
    }
  });
}

export default mobileDropdown;
