document.addEventListener("DOMContentLoaded", function () {
  var plusIcon = document.querySelector("#plusIcon");
  var content = document.querySelector(".accordion-bottom");

  plusIcon.addEventListener("click", function () {
    if (content.style.display == "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
