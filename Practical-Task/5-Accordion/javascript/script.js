document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
    const accordionHead = accordion.querySelector(".accordion-head");
    const accordionBody = accordion.querySelector(".accordion-body");
    // const accordionDesc = accordion.querySelector(".accordion-desc");
    const icon = accordion.querySelector(".fa-plus");


    accordionHead.addEventListener("click", () => {
      const isVisible = accordionBody.classList.contains("show");

      // Close all accordions first
      accordions.forEach((item) => {
        item.querySelector(".accordion-body").classList.remove("show");
        // item.querySelector(".accordion-desc").style.maxHeight = "0px";
        item.querySelector(".fa-plus").classList.remove("arrow-rotate");
      });

      if (!isVisible) {
        // Open the clicked one
        accordionBody.classList.toggle("show");
        // accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
        icon.classList.toggle("arrow-rotate");
      }
    });
  });
});
