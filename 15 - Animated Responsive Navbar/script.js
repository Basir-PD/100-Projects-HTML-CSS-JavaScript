const nav_links = document.querySelectorAll(".nav-link");
const burger = document.querySelector(".burger");

window.onresize = () => {
  const active = document.querySelector(".active");
  underlineLink(active);
};

function underlineLink(elem) {
  const underline = document.getElementById("underline");
  underline.style.left = `${elem.offsetLeft}px`;
  underline.style.width = `${elem.offsetWidth}px`;
}

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", (e) => {
    nav_links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
    underlineLink(e.target);
  });
});

/* burger */
burger.addEventListener("click", () => {
  if (burger.classList.contains("fa-bars")) {
    burger.classList.replace("fa-bars", "fa-times");
  } else {
    burger.classList.replace("fa-times", "fa-bars");
  }
});
