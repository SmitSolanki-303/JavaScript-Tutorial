import menuData from "./menuData.js";

const menuWrapper = document.querySelector(".menu-item-wrapper");
const buttonWrapper = document.querySelector(".filter-btn-wrapper");



// Load all Menu Items
document.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menuData);
  displayButtons();
});


// Display Filter Buttons
function displayButtons() {
  const categories = menuData.map(function (menuData) {
    return menuData.category;
  });

  // console.log(categories);
  const uniqueCategories = ["all", ...new Set(categories)];
  // console.log(uniqueCategories);

  var filterBtn = uniqueCategories.map(function (unique) {
    return `<a class="btn" data-category=${unique}>${unique}</a>`;
  });

  // console.log(filterBtn);
  filterBtn = filterBtn.join("");
  buttonWrapper.innerHTML = filterBtn;

  const filterButtons = document.querySelectorAll(".btn");

  filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const btnCategory = e.currentTarget.dataset.category;
    console.log(btnCategory);

    const menuCategory = menuData.filter(function (menuData) {

      if(btnCategory === menuData.category) {
        return menuData;
      }
    });

    if(btnCategory === "all"){
      displayMenuItems(menuData);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});
}

// Load the Menu Items according to the filter


function displayMenuItems(menuData) {
  let displayMenu = menuData.map(function (item) {
    // console.log(item);
    return `<div class="menu-item">
              <div class="food-image-wrapper">
                <img src=${item.img} alt=${item.img} class="food-image">
              </div>

              <div class="food-info-box">
                  <div class="info-top">
                      <p class="food-title">${item.title}</p>
                      <p class="food-price">$${item.price}</p>
                  </div>

                  <div class="info-bottom">
                      <p class="food-desc">${item.desc}</p>
                  </div>
              </div>
            </div>`;
  });

  // "" - is used as a separator between each element in the array. Here it is ".menu-item"
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);
  menuWrapper.innerHTML = displayMenu;
}
