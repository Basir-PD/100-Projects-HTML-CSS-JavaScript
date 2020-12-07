const slidesContainer = document.querySelector(".slides-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");
const items = document.querySelectorAll(".item");

const slideWidth = slides[0].clientWidth;
let index = 0;

slidesContainer.insertAdjacentHTML(
  "afterbegin",
  slides[slides.length - 1].outerHTML
);
slidesContainer.insertAdjacentHTML("beforeend", slides[0].outerHTML);

slidesContainer.style.transform = `translateX(${-slideWidth}px)`;

nextBtn.addEventListener("click", () => {
  slidesContainer.style.transition = "all 0.3s ease-in-out";
  
  index++;
  slidesContainer.style.transform = `translateX(${
    -slideWidth * (index + 1)
  }px)`;

  items.forEach((item) => item.classList.remove("active"));

  if (index > slides.length - 1) {
    setTimeout(() => {
      index = 0;
      slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
      items[index].classList.add("active");
      slidesContainer.style.transition = "none";
    }, 300);
  } else {
    items[index].classList.add("active");
  }
});

prevBtn.addEventListener("click", () => {
  slidesContainer.style.transition = "all 0.3s ease-in-out";

  index--;
  slidesContainer.style.transform = `translateX(${
    -slideWidth * (index + 1)
  }px)`;

  items.forEach((item) => item.classList.remove("active"));

  if (index < 0) {
    setTimeout(() => {
      index = slides.length - 1;
      slidesContainer.style.transform = `translateX(${
        -slideWidth * (index + 1)
      }px)`;
      items[index].classList.add("active");
      slidesContainer.style.transition = "none";
    }, 300);
  } else {
    items[index].classList.add("active");
  }
});

items.forEach((item, i) => {
  slidesContainer.style.transition = "all 0.3s ease-in-out";

  item.addEventListener("click", () => {
    items.forEach((item) => item.classList.remove("active"));
    index = i;
    item.classList.add("active");
	slidesContainer.style.transition = "all 0.3s ease-in-out";

    slidesContainer.style.transform = `translateX(${
      -slideWidth * (index + 1)
    }px)`;
  });
});
