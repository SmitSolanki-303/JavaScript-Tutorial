document.addEventListener("DOMContentLoaded", function () {
  // Selectors
  const alert = document.querySelector(".alert");         // Alert
  const form = document.querySelector(".todo-form");      // To Do Form
  const grocery = document.querySelector("#grocery");     // user input value (Ex. Milk)
  const submitBtn = document.querySelector(".btn");       // Submit Button
  const groceryContainer = document.querySelector(".grocery-container");      // To Do Main Container 
  const groceryList = document.querySelector(".grocery-list");          // To Do List - <ul> tag
  const groceryItem = document.querySelector(".grocery-item");          // To Do Item - <li> tag
  const clearBtn = document.querySelector(".remove-all");     // Clear all item Button

  // Editable
  let editElement;
  let editFlag = "false";   // it is used as after selecting the edit button it will be true
  let editID = "";

  // Event Listener

  // Submit Form
  form.addEventListener("submit", addItem);


  // Functions
  function addItem(e) {
    e.preventDefault();
    console.log(grocery.value);

    const value = grocery.value;

    // just for practice purpose using this ID approach
    const id = new Date().getTime().toString();
    // console.log(id);

    if(value && !editFlag ){
      console.log("add item");
      showAlert("Item Added Successfully ", "green")
    }
    else if(value && editFlag ) {
      console.log("editing");
      showAlert("Item Edited Successfully ", "green")
    }
    else {
      console.log("null value");
      showAlert("Enter Item", "red")
    }

    // const groceryUserItem = groceryList.innerHTML = `<li class="grocery-item">${value} <span class="icons"><i class="fa-solid fa-pen-to-square"></i> <i class="fa-solid fa-trash"></i></span></li>`;

    // console.log(groceryUserItem);
  }

  // Display Alert
  // here action will be whether it would have green color or red color
  function showAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    setTimeout(()=> {
      alert.textContent = "";
      alert.classList.remove(`alert-${action}`) 
    }, 2000)
  }
});

