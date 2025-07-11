document.addEventListener("DOMContentLoaded", function () {
  var openModal = document.querySelector("#openModal");
  var closeModal = document.querySelector("#closeModal");
  var modalOverlay = document.querySelector(".modal-overlay");

  openModal.addEventListener("click", function () {
    console.log("hii");
    modalOverlay.classList.add("show-overlay");
  });

  closeModal.addEventListener("click", function () {
    console.log("close");
    modalOverlay.classList.remove("show-overlay");
  });
});
