import menuData from "./menuData.js";

const menuWrapper = document.querySelector(".menu-item-wrapper");
const buttonWrapper = document.querySelector(".filter-btn-wrapper");



// Load all Menu Items
document.addEventListener("DOMContentLoaded", function () {

  // Load the all Menu Items 
  displayMenuItems(menuData);

  // Display Filter Buttons
  displayButtons();
});


// Display Filter Buttons
function displayButtons() {

  // Get all the  category from the data file(menuData.js)
  const categories = menuData.map(function (menuData) {
    return menuData.category;
  });

  // Adding "All" button with the  category and creating new array with all unique categories. (using Set() it removes the duplicate values)
  // console.log(categories);
  const uniqueCategories = ["all", ...new Set(categories)];
  // console.log(uniqueCategories);

  // Showing the filter button on the UI dynamically
  var filterBtn = uniqueCategories.map(function (unique) {
    return `<a class="btn" data-category=${unique}>${unique}</a>`;
  });

  // console.log(filterBtn);

  // "" - is used as a separator between each element in the array
  filterBtn = filterBtn.join("");
  buttonWrapper.innerHTML = filterBtn;


  // Select all the filter buttons with Selector
  const filterButtons = document.querySelectorAll(".btn");

  // Adding event listener to each filter button
  filterButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {

    // Getting the category from the filter button
    // User selected filter button stored in btnCategory
    const btnCategory = e.currentTarget.dataset.category;
    console.log(btnCategory);

    // Filter the menuData based on the category
    const menuCategory = menuData.filter(function (menuData) {

      // console.log(menuData.category);
      if(btnCategory === menuData.category) {
        return menuData;
      }
    });

    // Display the filtered menu items according to  user selection
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
