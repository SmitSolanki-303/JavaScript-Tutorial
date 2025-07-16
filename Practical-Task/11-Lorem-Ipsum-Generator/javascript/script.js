import paragraphData from "./paragraphData.js";
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".input-form");
  const limit = document.querySelector("#limit");
  var paragraph = document.querySelector(".paragraph-box");

  form.addEventListener("submit", function (e) {
    // use to prevent the default behavior as after submit it disappear
    e.preventDefault();
    console.log("form submitted");
    const value = parseInt(limit.value);
    console.log(value);

    const length = paragraphData.length;
    //   console.log(length);

    const random = Math.floor(Math.random() * length);  


    //  (isNaN(value) || value <= 0 || value > length)
    // for(let i = value ; i > 0 ; i++) {
    //     paragraph.innerHTML = `<p class="paragraph">${paragraphData[i]}</p>`;
    // }

    if (isNaN(value) || value <= 0 ) {
      paragraph.innerHTML = `<p class="paragraph">${paragraphData[random]}</p>`;
    } else {
      // slice(startingIndex , lastIndex)
      let tempParagraph = paragraphData.slice(0, value);
      console.log(tempParagraph);

      tempParagraph = tempParagraph.map(function (paragraph) {
          // console.log(paragraph);
          return `<p class="paragraph">${paragraph}</p>`;
        })
        .join("");

      paragraph.innerHTML = tempParagraph;

    }
  });
});
