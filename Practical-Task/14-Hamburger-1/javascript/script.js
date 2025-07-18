import desktopDropdown from "./desktopDropdown.js";
import mobileDropdown from "./mobileDropdown.js";
import selectDropdown from "./desktopSelectDropdown.js";
import mobileSelectDropdown from "./mobileSelectDropdown.js";
import toast from "./toast.js";
import accordion from "./accordion.js";

document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const collapseHeader = document.querySelector(".collapse-header");

  // Desktop hover Dropdown
  desktopDropdown();
  // Desktop Select Dropdown.
  selectDropdown();
  // Toast
  toast();

  // Hamburger Menu
  hamburgerMenu.addEventListener("click", function () {
    if (collapseHeader.classList.contains("active")) {
      collapseHeader.classList.remove("active");
    } else {
      collapseHeader.classList.add("active");
    }
  });
  // Mobile Hover Dropdown
  mobileDropdown();
  // Mobile Select Dropdown
  mobileSelectDropdown();

  // Accordion
  accordion();
});
