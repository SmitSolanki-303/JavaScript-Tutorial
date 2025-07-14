import menuData from "./menuData.js";

var menuWrapper = document.querySelector(".menu-item-wrapper");

console.log(menuWrapper);

document.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menuData);
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
