document.addEventListener("DOMContentLoaded", function () {
  // Selectors
  const alert = document.querySelector(".alert");
  const form = document.querySelector(".todo-form");
  const grocery = document.querySelector("#grocery");
  const submitBtn = document.querySelector(".btn");
  const groceryContainer = document.querySelector(".grocery-container");
  const groceryList = document.querySelector(".grocery-list");
  const groceryItem = document.querySelector(".grocery-item");
  const clearBtn = document.querySelector(".remove-all");

  // Editable
  let editElement;
  let editFlag = "false";   // it is used as after selecting the edit button it will be true
  let editID = "";

  // Event Listener

  // Submit Form
  form.addEventListener("submit", addItem);


  // Functions
  function addItem() {
    
  }
});
