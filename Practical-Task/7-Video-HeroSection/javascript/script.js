document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".play-pause-btn");
  const video = document.querySelector(".video-bg");

  btn.addEventListener("click", function () {
    if(!btn.classList.contains("slide")){
        btn.classList.add("slide");
        video.pause();
    }
    else {
        btn.classList.remove("slide");
        video.play();
    }
  });

});
