document.addEventListener("DOMContentLoaded", function () {
  // Selector
  const hamburgerBtn = document.querySelector("#hamburgerBtn");
  const sidebar = document.querySelector("#sidebar");
  const sidebarClose = document.querySelector("#sidebarClose");
  const overlay = document.querySelector(".overlay");
  const body = document.body;

  // Functions
  // open sidebar
  function openSidebar() {
    sidebar.classList.add("open");
    overlay.classList.add("active");
    body.classList.add("noScroll");
  }

  // close sidebar
  function closeSidebar() {
    sidebar.classList.remove("open");
    overlay.classList.remove("active");
    body.classList.remove("noScroll");
  }

  // Event listeners
  hamburgerBtn.addEventListener("click", openSidebar);
  sidebarClose.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  // closing sidebar after selecting on navigation link
  const navLinks = document.querySelectorAll(".sidebar-nav a");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      closeSidebar();
    });
  });

  // Prevent clicks inside sidebar from closing it
  sidebar.addEventListener("click", (e) => {
    // stopPropagation() stops the event to bubble up the DOM tree
    e.stopPropagation();
  });
});
