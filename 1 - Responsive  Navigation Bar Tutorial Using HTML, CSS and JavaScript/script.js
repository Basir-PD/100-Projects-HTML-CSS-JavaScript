const dropdown_btns = document.querySelectorAll(".dropdown-btn");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  const navbar_content = document.querySelector(".navbar-content");
  burger.classList.toggle("active");

  navbar_content.classList.toggle("show");
});

dropdown_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const dropdown = e.currentTarget.nextElementSibling;

    dropdown.classList.toggle("show");
    document
      .querySelectorAll(".dropdown-btn + .dropdown-list")
      .forEach((dropdown) => {
        if (dropdown !== e.currentTarget.nextElementSibling) {
          dropdown.classList.remove("show");
        }
      });
  });
});

window.onclick = (e) => {
  if (!e.target.matches(".dropdown-btn")) {
    const dropdowns = document.querySelectorAll(".dropdown-list");
    dropdowns.forEach((drpodown) => {
      drpodown.classList.remove("show");
    });
  }
};
