document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const navLink = document.querySelectorAll(".nav-link");
  const scrollToTopButton = document.querySelector(".scroll-to-top");

  const hamburgerButton = document.querySelector(".hamburger-menu");
  const mobileMenu = document.querySelector(".collapse-header");
  const mobileMenuLinks = document.querySelectorAll(".collapse-nav-link");

  window.addEventListener("scroll", handleScroll);

  hamburgerButton.addEventListener("click", toggleMobileMenu);

  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", handleMobileMenuClick);
  });

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("active");
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove("active");
  }

  function handleScroll() {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
        scrollToTopButton.classList.add("active");
      navLink.forEach((link) => {
        link.style.color = "var(--color-black)";
      });
    } else {
      header.classList.remove("scrolled");
        scrollToTopButton.classList.remove("active");
        navLink.forEach((link) => {
        link.style.color = ""; // Reset to CSS default
      });
    }
  }

  function handleMobileMenuClick(event) {
    closeMobileMenu();

    const clickedLink = event.target;
    const targetSection = clickedLink.getAttribute("href");

    if (targetSection && targetSection.startsWith("#")) {
      setTimeout(() => {
        const section = document.querySelector(targetSection);
        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }
});
