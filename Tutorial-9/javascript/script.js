// getElementById() - Returns the first element that matches the specified ID.
// 
// const sectionTitle = document.getElementById('section-title');
// console.log(sectionTitle.textContent);
// sectionTitle.textContent = "Text change from JS";
// console.log(sectionTitle.textContent);


// Using 'textContent' it will show the text even if it has {display: none}.
// Using 'innerText' it will show same as how it is shown in webpage. If text is hidden then also it will not show like 'textContent'.


// querySelector() - Returns the first element that matches the specified CSS selector.
// const headerQuery = document.querySelector('.header');
// console.log(headerQuery);



// const sectionTitle = document.querySelector('div.todo-wrapper #section-title');
// sectionTitle.style.color = 'red';
// console.log(sectionTitle.style);


// Theroy - getAttribute - It is used for getting the value of the selected attribute. setAttribute - It is used for setting or defining the value of the attribute from the javascript
// const link = document.querySelector("li.nav-item a");
// console.log(link.getAttribute('href').slice(1));
// link.setAttribute("href", "https:www.google.com")
// console.log(link.getAttribute('href'));


// const formtype = document.querySelector("form.form-todo input");
// console.log(formtype.getAttribute('type'));


// get multiple elements  using getElement by class name
// const anchorElement = document.getElementsByTagName("a")

// for(let i=0 ; i<anchorElement.length ; i++) {
//     const anchor =  anchorElement[i];
//     anchor.style.backgroundColor = "red";
//     anchor.style.color = "white";
//     anchor.style.fontWeight = "bold"
// }


// for(let anchor of anchorElement) {
//     anchor.style.color = "white";
//     anchor.style.backgroundColor = "green";
// }
// console.log(anchorElement);

// in HTMLCollection, we can only use simple for loop and for of loop.
// in nodeList, we can use all 3 types of loop - simple for loop, for each loop and for of loop.


// Changineg the HTMLCollection or Nodelist into Array
// let navItemsSelectors = document.querySelectorAll(".nav-item");
// navItemsSelectors = Array.from(navItemsSelectors)
// console.log(Array.isArray(navItemsSelectors));


// get multiple elements items using querySelectorAll
// let navItemsSelectors = document.querySelectorAll(".nav-item a");
// console.log(navItemsSelectors);

// for(let i=0 ; i<navItemsSelectors.length ; i++) {
//     const navItem = navItemsSelectors[i];
//     navItem.style.color = "orange";
//     navItem.style.backgroundColor = "black"
// }

// for(let navItem of navItemsSelectors) {
//     navItem.style.color = "red";
//     navItem.style.backgroundColor = "yellow";
// }

// navItemsSelectors.forEach((navItem)=> {
//     navItem.style.color = "red";
//     navItem.style.backgroundColor = "green"
// })




// innerHTML - 
// const sectionTitle = document.querySelector("#section-title");
// sectionTitle.innerHTML = "<h1>Value changed from JavaScript</h1>";
// sectionTitle.innerHTML += "<button class=\"btn\">Button</button>"
// console.log(sectionTitle.innerHTML);



 
// Class
// const todoList = document.getElementsByClassName("todo-list");

// const todoList = document.querySelector(".todo-list");

// todoList.innerHTML += "<li>Tutorial 1</li>"
// todoList.innerHTML += "<li>Tutorial 2</li>"
// console.log(todoList);




// document.createElement 

const newTodoItem = document.createElement("li");
console.log(newTodoItem);
