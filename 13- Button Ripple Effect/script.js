const btns = document.querySelectorAll(".btn-ripple");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let x_coord = e.clientX;
    let y_coord = e.clientY;

    let btn_top_pos = e.target.offsetTop;
    let btn_left_pos = e.target.offsetLeft;

    let x = x_coord - btn_left_pos;
    let y = y_coord - btn_top_pos;

    const span = document.createElement("span");
    span.classList.add("ripple");
    span.style.top = `${y}px`;
    span.style.left = `${x}px`;

    this.appendChild(span);

    setTimeout(() => this.removeChild(span), 500);
  });
});
