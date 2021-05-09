const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");
const overlay = document.getElementById("overlay");
const restartBtn = document.getElementById("btn-restart");
const quitBtn = document.getElementById("btn-quit");
const clickAudio = document.getElementById("click");
const gameoverAudio = document.getElementById("gameover");
let currentTurn = "Player 01";
const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let wonArr;

cells.forEach((cell) => {
  cell.addEventListener("mouseenter", hoverIn);
  cell.addEventListener("mouseleave", hoverOut);
  cell.addEventListener("click", action, { once: true });
});

restartBtn.addEventListener("click", restart);
quitBtn.addEventListener("click", quit);

function restart() {
  message.innerText = "Player 01's Turn";
  overlay.classList.remove("active");

  cells.forEach((cell) => {
    cell.addEventListener("mouseenter", hoverIn);
    cell.addEventListener("mouseleave", hoverOut);
    cell.classList.remove("cross");
    cell.classList.remove("cross-hover");
    cell.classList.remove("circle");
    cell.classList.remove("circle-hover");
    cell.classList.remove("highlight");
    cell.removeEventListener("click", action);
    cell.addEventListener("click", action, { once: true });
    cell.style.cursor = "pointer";
  });
}

function quit() {
  window.close();
}

function action() {
  let currentClass = currentTurn === "Player 01" ? "cross" : "circle";
  this.classList.remove(`${currentClass}-hover`);
  this.classList.add(currentClass);
  clickAudio.play();

  if (isWinner(currentClass)) {
    message.innerText = `${currentTurn} Won !!!`;
    wonArr.forEach((i) => cells[i].classList.add("highlight"));
    reset();
    return;
  } else {
    const res = Array.from(cells).every((cell) => {
      return cell.classList.length === 2;
    });
    if (res) {
      message.innerText = `It is a TIE !!!`;
      cells.forEach((cell) => {
        cell.classList.add("highlight");
      });
      reset();
      return;
    }
  }

  currentTurn === "Player 01"
    ? (currentTurn = "Player 02")
    : (currentTurn = "Player 01");

  message.innerText = `${currentTurn}'s Turn!`;
}

function isWinner(curClass) {
  return wins.some((win) => {
    const res = win.every((i) => cells[i].classList.contains(curClass));
    if (res) {
      wonArr = win;
    }
    return res;
  });
}

function hoverIn() {
  let currentClass = currentTurn === "Player 01" ? "cross" : "circle";
  if (this.classList.contains("cross") || this.classList.contains("circle")) {
    this.style.cursor = "not-allowed";
  } else {
    this.classList.add(`${currentClass}-hover`);
  }
}

function hoverOut() {
  if (
    this.classList.contains("cross-hover") ||
    this.classList.contains("circle-hover")
  ) {
    this.classList.remove("cross-hover");
    this.classList.remove("circle-hover");
  }
}

function reset() {
  cells.forEach((cell) => {
    cell.removeEventListener("mouseenter", hoverIn);
    cell.removeEventListener("mouseleave", hoverOut);
    cell.removeEventListener("click", action);
    cell.style.cursor = "not-allowed";
  });

  gameoverAudio.play();

  setTimeout(() => {
    overlay.classList.add("active");
  }, 2000);
}
