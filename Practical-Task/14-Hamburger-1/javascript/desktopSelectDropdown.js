
  // Desktop Select Dropdown
  function desktopSelectDropdown() {
  const body = document.querySelector("body");
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
        // console.log(value);

        const languageTitle = document.getElementById("selectDropdownTitle");
        languageTitle.textContent = value;
        // console.log(languageTitle.textContent);
      });
    }
  }

  export default desktopSelectDropdown;