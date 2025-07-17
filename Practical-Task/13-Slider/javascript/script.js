document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");

    let currentIndex = 0;

    // Functions
    function showSlide(index) {
        slides.forEach((slide, i) => {
            // Remove active class from all slides
            slide.classList.remove("active");
        });
        // Add active class on the current slide
        slides[index].classList.add("active");
    }

    // console.log(slides.length);
    const length = slides.length;

    // Next button function
    function nextSlide() {
        // %length is used to wrap around the array to 0
        currentIndex = (currentIndex + 1) % length;
        showSlide(currentIndex);
    }

    // Previous button function
    function prevSlide() {
        // after decrement to -1 , it will wrap around to the last index of array
        currentIndex = (currentIndex - 1 + length) % length;
        showSlide(currentIndex);
    }

    // Event listeners
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    // load the first slide as default
    showSlide(currentIndex);
});
