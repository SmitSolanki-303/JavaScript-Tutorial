document.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const collapseHeader = document.querySelector(".collapse-header");

  // Desktop hover Dropdown
  desktopDropdown();
  // Desktop Select Dropdown.
  selectDropdown();
  // Toast
  toast();

  // MOBILE DEVICE
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

  // Desktop hover Dropdown
  function desktopDropdown() {
    const selectedItem = document.querySelectorAll(".nav-item");
    const serviceSelected = selectedItem[1];
    const arrow = document.querySelector(".fa-angle-down");
    const dropdownData = document.querySelector(".dropdown-list");

    // Function
    function showDropdown() {
      console.log("mouse enter");
      arrow.classList.add("arrow-rotate");
      dropdownData.classList.add("show");
      body.classList.add("noScroll");
    }

    function hideDropdown() {
      console.log("mouse leave");
      arrow.classList.remove("arrow-rotate");
      dropdownData.classList.remove("show");
      body.classList.remove("noScroll");
    }

    // Event Listener
    serviceSelected.addEventListener("mouseenter", showDropdown);
    serviceSelected.addEventListener("mouseleave", hideDropdown);
  }

  // Desktop Select Dropdown
  function selectDropdown() {
    // Select Dropdown
    const languageSelect = document.querySelector(".select-dropdown");
    const selectDropDown = document.querySelector(".select-dropdown-list");
    // console.log(selectDropDown);

    const languageItem = document.querySelectorAll(".select-dropdown-item");
    // const value;

    languageSelect.addEventListener("mouseenter", function () {
      selectDropDown.classList.add("select-dropdown-show");
      body.classList.add("noScroll");
    });

    languageSelect.addEventListener("mouseleave", function () {
      selectDropDown.classList.remove("select-dropdown-show");
      body.classList.remove("noScroll");
    });

    for (let language of languageItem) {
      language.addEventListener("click", function () {
        const value = this.textContent;
        console.log(value);

        const languageTitle = document.getElementById("selectDropdownTitle");
        languageTitle.textContent = value;
        console.log(languageTitle.textContent);
      });
    }
  }

  // Mobile Hover Dropdown
  function mobileDropdown() {
    const selectedItem = document.querySelectorAll(".collapse-nav-item");
    const serviceSelected = selectedItem[1];
    console.log(serviceSelected.textContent);
    const arrow = document.querySelector(".fa-angle-down");
    const collapseDropdownData = document.querySelector(
      ".collapse-dropdown-list"
    );

    // Function
    function showDropdown() {
      console.log("show mobile dropdown");
      // arrow.classList.add("collapse-arrow-rotate");
      collapseDropdownData.classList.add("show");
      body.classList.add("noScroll");
    }

    function hideDropdown() {
      console.log("hide mobile dropdown");
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

  // Mobile Select Dropdown
  function mobileSelectDropdown() {
    // Select Dropdown
    const languageSelect = document.querySelector(".collapse-select-dropdown");
    const selectDropDown = document.querySelector(
      ".collapse-select-dropdown-list"
    );
    // console.log(selectDropDown);

    const languageItem = document.querySelectorAll(
      ".collapse-select-dropdown-item"
    );
    // const value;

    // Mobile Click/Select logic
    languageSelect.addEventListener("click", function () {
      selectDropDown.classList.toggle("collapse-select-dropdown-show");
      body.classList.toggle("noScroll");
    });

    // Desktop HOVER Logic
    // languageSelect.addEventListener("mouseenter", function () {
    //   selectDropDown.classList.add("collapse-select-dropdown-show");
    //   body.classList.add("noScroll");
    // });

    // languageSelect.addEventListener("mouseleave", function () {
    //   selectDropDown.classList.remove("collapse-select-dropdown-show");
    //   body.classList.remove("noScroll");
    // });

    for (let language of languageItem) {
      language.addEventListener("click", function () {
        const value = this.textContent;
        console.log(value);

        const languageTitle = document.getElementById(
          "collapseSelectDropdownTitle"
        );
        languageTitle.textContent = value;
        console.log(languageTitle.textContent);
      });
    }
  }

  // Toast
  function toast() {
    const heroBtn = document.querySelector("#heroBtn");
    const toastMessage = document.querySelector(".toast-message");
    let btnClick = 0;
    var btnFlag = false;
    function showToast() {
      toastMessage.classList.add("toast-message-show");
    }

    function removeToast() {
      toastMessage.classList.remove("toast-message-show");
    }

    heroBtn.addEventListener("click", () => {
      btnClick++;

      // Based on click Toast appear and disappear
      if (btnFlag == true) {
        removeToast();
        console.log("on click close");
        btnFlag = false;
      } else {
        showToast();
        setTimeout(() => {
          removeToast();
        }, 5000);
        console.log("on click open");
        btnFlag = true;
      }

      // Multiple Toast
      // for (let i = 0; i < btnClick; i++) {
      //   console.log("btn clicked", +btnClick);
      //   showToast();
      // }

      // setTimeout(() => {
      //   toastMessage.classList.remove("toast-message-show");
      // }, 1000);
    });
  }

  // Accordion
  function accordion() {
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
      const accordionHead = accordion.querySelector(".accordion-head");
      const accordionBody = accordion.querySelector(".accordion-body");
      const icon = accordion.querySelector(".fa-chevron-down");

      accordionHead.addEventListener("click", () => {
        const isVisible = accordionBody.classList.contains("show");

        // Close all accordions first
        accordions.forEach((item) => {
          item.querySelector(".accordion-body").classList.remove("show");
          // item.querySelector(".accordion-desc").style.maxHeight = "0px";
          item
            .querySelector(".fa-chevron-down")
            .classList.remove("arrow-rotate");
        });

        if (!isVisible) {
          // Open the clicked one
          accordionBody.classList.toggle("show");
          // accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
          icon.classList.toggle("arrow-rotate");
        }
      });
    });
  }
});
