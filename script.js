const container = document.querySelector(".container");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function generateGrid(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    let div = document.createElement("div");
    div.classList.add("row");
    container.appendChild(div);
    for (let j = 0; j < gridSize; j++) {
      let div2 = document.createElement("div");
      div.appendChild(div2);
      div2.classList.add("square");
    }
  }
}

function colorSquares() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(
        256
      )}, ${getRandomInt(256)})`;
    });
  });
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    const rows = document.querySelectorAll(".row");
    rows.forEach((row) => container.removeChild(row));
    generateGrid(prompt("What size?"));
    colorSquares();
});

generateGrid(16);
colorSquares();


