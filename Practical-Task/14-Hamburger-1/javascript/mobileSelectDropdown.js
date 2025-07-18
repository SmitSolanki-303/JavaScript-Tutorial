// Mobile Select Dropdown
function mobileSelectDropdown() {
  const body = document.querySelector("body");
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
      // console.log(value);

      const languageTitle = document.getElementById(
        "collapseSelectDropdownTitle"
      );
      languageTitle.textContent = value;
      // console.log(languageTitle.textContent);
    });
  }
}

export default mobileSelectDropdown;
