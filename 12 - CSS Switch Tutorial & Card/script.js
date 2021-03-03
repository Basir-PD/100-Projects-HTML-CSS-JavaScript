const checkboxes = document.querySelectorAll(".checkbox");
const beginner = document.getElementById("beginner");
const advanced = document.getElementById("advanced");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    if (beginner === e.target) {
      advanced.checked = false;
    }
    if (advanced === e.target) {
      beginner.checked = false;
    }
  });
});
