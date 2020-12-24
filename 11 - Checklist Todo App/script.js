const todos = document.querySelectorAll(".todo");
const togglers = document.querySelectorAll(".toggler");

todos.forEach((todo) => {
  todo.addEventListener("click", () => {
    todo.classList.toggle("active");
  });
});

togglers.forEach((toggler) => {
  toggler.addEventListener("click", () => {
    toggler.classList.toggle("active");
    toggler.nextElementSibling.classList.toggle("active");
  });
});
