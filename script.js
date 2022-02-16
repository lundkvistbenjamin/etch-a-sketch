const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-btn");
let divs = document.querySelectorAll(".container div");

let horizontalGridSize;
let verticalGridSize;
const divBackgroundColor = "rgb(228, 236, 243)";
const gridDefaultValue = 16;

function requestUserGrid() {
  horizontalGridSize = prompt("Enter horizontal blocks(max 100): ");
  while (horizontalGridSize > 100) {
    horizontalGridSize = prompt("Enter horizontal blocks(max 100): ");
  }
  verticalGridSize = prompt("Enter vertical blocks(max 100): ");
  while (verticalGridSize > 100) {
    verticalGridSize = prompt("Enter vertical blocks(max 100): ");
  }
  if (horizontalGridSize === null || verticalGridSize === null) {
    horizontalGridSize = gridDefaultValue;
    verticalGridSize = gridDefaultValue;
  }
}

function createDivs(
  horizontalGridSize = gridDefaultValue,
  verticalGridSize = gridDefaultValue
) {
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
  let children = document.querySelector(".container").children;
  for (const child of children) {
    child.style.backgroundColor = divBackgroundColor;
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
