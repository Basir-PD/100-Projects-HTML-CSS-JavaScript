const theme_checkbox = document.getElementById("theme-checkbox");

const theme = localStorage.getItem("theme");

if (theme) {
  document.documentElement.setAttribute("data-theme", "dark");
  if (theme === "dark") {
    theme_checkbox.checked = true;
  }
}

theme_checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
    localStorage.removeItem("theme");
  }
});
