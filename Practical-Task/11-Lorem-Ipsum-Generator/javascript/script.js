import paragraphData from "./paragraphData.js";
document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector(".input-form");
    const limit = document.querySelector("#limit")

    form.addEventListener("submit", function(){
        console.log("form submitted");
        console.log(limit.value);
    })
});