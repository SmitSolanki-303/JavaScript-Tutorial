document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const accordionHead = accordion.querySelector(".accordion-head");
    const accordionBody = accordion.querySelector(".accordion-body");
    const icon = accordion.querySelector(".fa-plus");

    accordionHead.addEventListener("click", (e) => {
      const isVisible = accordionBody.classList.contains("show");
      // Close all accordions first
      accordions.forEach((item) => {
        item.querySelector(".accordion-body").classList.remove("show");
        item.querySelector(".fa-plus").classList.remove("show");
      });
      if (!isVisible) {
        // Open the clicked one
        accordionBody.classList.toggle("show");
        icon.classList.toggle("show");
      }
    });
  });
});

// const isVisible = accordionBody.classList.contains("show");
// // Close all accordions first
// accordions.forEach((item) => {
//   item.querySelector(".accordion-body").classList.remove("show");
//   item.querySelector(".fa-plus").classList.remove("show");
// });

// if (!isVisible) {
//   // Open the clicked one
//   accordionBody.classList.toggle("show");
//   icon.classList.toggle("show");
// }
