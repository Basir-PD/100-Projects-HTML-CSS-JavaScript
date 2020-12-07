const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btns.forEach((btn) => btn.classList.remove("active"));

    btn.classList.add("active");
    const tabContents = document.querySelectorAll(".tab-content");

    // tabContents.forEach((tabContent) => {
    //   tabContent.className = tabContent.className.replace("active", "");
    // });

    tabContents.forEach((tab) => tab.classList.remove("active"));

    document.querySelector(btn.dataset.targetTab).classList.add("active");
  });
});
