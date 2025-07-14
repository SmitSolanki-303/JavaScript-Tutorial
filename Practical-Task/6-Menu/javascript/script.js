import menuData from "./menuData.js";

const menuWrapper = document.querySelector(".menu-item-wrapper");
const filterButtons = document.querySelectorAll(".btn");
console.log(menuWrapper);

// Load all Menu Items
document.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menuData);
});

// Load the Menu Items according to the filter
filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const btnCategory = e.currentTarget.dataset.category;
    console.log(btnCategory);
    const menuCategory = menuData.filter(function (menuData) {
      if (btnCategory === "lunch") {
        return menuData.category === btnCategory;
      } else if (btnCategory === "breakfast") {
        return menuData.category === btnCategory;
      } else if (btnCategory === "shakes") {
        return menuData.category === btnCategory;
      } else {
        return menuData;
      }
    });
    console.log(menuCategory);
    displayMenuItems(menuCategory);
  });
});

function displayMenuItems(menuData) {
  let displayMenu = menuData.map(function (item) {
    // console.log(item);
    return `<div class="menu-item">
              <div class="food-image-wrapper">
                <img src=${item.img} alt=${item.img} class="food-image">
              </div>

              <div class="food-info-box">
                  <div class="info-top">
                      <h2 class="food-title">${item.title}</h2>
                      <p class="food-price">${item.price}</p>
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
