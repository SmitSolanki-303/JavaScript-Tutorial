document.addEventListener("DOMContentLoaded", function () {
  var accordionTop = document.querySelectorAll(".accordion-top");

  accordionTop.forEach((accordion) => {
    // console.log(accordion);
    accordion.addEventListener("click", function (e) {
      var current = e.currentTarget.parentElement;

      var icon = accordion.querySelector(".fa-plus");
      var content = accordion.nextElementSibling;
      // icon.style.transform = "rotate(135deg)";
      console.log(content);

      if (content.style.display == "block") {
        icon.style.transform = "rotate(0deg)";
        content.style.display = "none";
      } else {
        icon.style.transform = "rotate(135deg)";
        content.style.display = "block";
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
});


// var plusIcon = accordion.querySelector(".fa-plus");
// var content = accordion.nextElementSibling;

// if (content.style.display == "block") {
//   plusIcon.style.transform = "rotate(0deg)";
//   content.style.display = "none";
// } else {
//   plusIcon.style.transform = "rotate(135deg)";
//   content.style.display = "block";
//   content.style.maxHeight = content.scrollHeight + "px";
// }
