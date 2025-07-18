
  // Toast
  function toast() {
    const heroBtn = document.querySelector("#heroBtn");
    const toastMessage = document.querySelector(".toast-message");
    let btnClick = 0;
    var btnFlag = false;
    function showToast() {
      toastMessage.classList.add("toast-message-show");
    }

    function removeToast() {
      toastMessage.classList.remove("toast-message-show");
    }

    heroBtn.addEventListener("click", () => {
      btnClick++;

      // Based on click Toast appear and disappear
      if (btnFlag == true) {
        removeToast();
        // console.log("on click close");
        btnFlag = false;
      } else {
        showToast();
        setTimeout(() => {
          removeToast();
        }, 5000);
        // console.log("on click open");
        btnFlag = true;
      }

      // Multiple Toast
      // for (let i = 0; i < btnClick; i++) {
      //   console.log("btn clicked", +btnClick);
      //   showToast();
      // }

      // setTimeout(() => {
      //   toastMessage.classList.remove("toast-message-show");
      // }, 1000);
    });
  }


  export default toast;