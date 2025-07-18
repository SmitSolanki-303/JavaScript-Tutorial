// Accordion
function accordion() {
  const accordions = document.querySelectorAll(".accordion");
  // console.log(accordions);
  accordions.forEach((accordion) => {
    const accordionHead = accordion.querySelector(".accordion-head");
    const accordionBody = accordion.querySelector(".accordion-body");
    const icon = accordion.querySelector(".fa-chevron-down");

    accordionHead.addEventListener("click", () => {
      const isVisible = accordionBody.classList.contains("show");

      // Close all accordions first
      accordions.forEach((item) => {
        item.querySelector(".accordion-body").classList.remove("show");
        // item.querySelector(".accordion-desc").style.maxHeight = "0px";
        item.querySelector(".fa-chevron-down").classList.remove("arrow-rotate");
      });

      if (!isVisible) {
        // Open the clicked one
        accordionBody.classList.toggle("show");
        // accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
        icon.classList.toggle("arrow-rotate");
      }
    });
  });
}


export default accordion;