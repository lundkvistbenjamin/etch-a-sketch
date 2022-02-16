const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
let divs = document.querySelectorAll(".container div");

let horizontalGridSize;
let verticalGridSize;

function requestUserGrid() {
  horizontalGridSize = prompt("Enter horizontal blocks: ");
  if (horizontalGridSize >= 100) {
    horizontalGridSize = prompt("Enter horizontal blocks(max 100): ");
  }
  verticalGridSize = prompt("Enter vertical blocks: ");
  if (verticalGridSize >= 100) {
    verticalGridSize = prompt("Enter horizontal blocks(max 100): ");
  }
}

function createDivs(horizontalGridSize = 16, verticalGridSize = 16) {
  for (let i = 0; i < horizontalGridSize * verticalGridSize; i++) {
    let div = document.createElement("div");
    container.appendChild(div);
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = randomColor();
    });
  }
  container.style.gridTemplateRows = `repeat(${horizontalGridSize}, 1fr)`;
  container.style.gridTemplateColumns = `repeat(${verticalGridSize}, 1fr)`;
}

function resetDivs() {
  container.innerHTML = "";
  let divs = document.querySelector(".container").children;
  for (const div of divs) {
    div.style.backgroundColor = "rgb(228, 236, 243)";
  }
}

resetBtn.addEventListener("click", function () {
  resetDivs();
  requestUserGrid();
  createDivs(horizontalGridSize, verticalGridSize);
});

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createDivs(horizontalGridSize, verticalGridSize);
