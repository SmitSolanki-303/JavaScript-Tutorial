document.addEventListener("DOMContentLoaded", function () {

  // Selectors
  const header = document.querySelector(".header");
  const navLink = document.querySelectorAll(".nav-link");
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  const hamburgerButton = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".collapse-header");
  const mobileMenuLinks = document.querySelectorAll(".collapse-nav-link");


  // Event Listeners
  window.addEventListener("scroll", handleScroll);

  hamburgerButton.addEventListener("click", toggleMobileMenu);

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", handleMobileMenuClick);
  });


  // Functions
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
  }

  function handleScroll() {
    // user scroll up the page more than 50 the header will change color to white from transparent
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
      scrollToTopButton.classList.add("active");
      navLink.forEach((link) => {
        link.style.color = "var(--color-black)";
      });
    } else {
      //  user scroll down the page less than 50 the header will back to transparent
      header.classList.remove("scrolled");
      scrollToTopButton.classList.remove("active");
       navLink.forEach((link) => {
        link.style.color = ""; 
      });
    }
  }

  
  // Event Handlers
  function handleMobileMenuClick(event) {
    closeMobileMenu();

    const clickedLink = event.target;
    // will get the href attribute of the clicked link
    const targetSection = clickedLink.getAttribute("href");

    // check if the href attribute starts with "#"
    if (targetSection && targetSection.startsWith("#")) {

      // scroll to the section
      setTimeout(() => {
        const section = document.querySelector(targetSection);
        if (section) {

          // scrollIntoView will scroll to the top of the section
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
            
          });
        }
      }, 100);
    }
  }
});
