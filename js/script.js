const DEFAULT_GRID_SIZE = 16;
const SQUARE_LIMIT = 100;

// STARTUP: Create 16x16 grid of square divs
createGrid(DEFAULT_GRID_SIZE);

function createGrid(size) {
    const gridContainer = document.querySelector(".grid-container");
    let amtOfSquares = size * size;
    for (let count = 0; count < amtOfSquares; count++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("grid");
        gridContainer.appendChild(square);
        enableDraw();

        // Add grid through calculated width
        square.style.width = `calc(100% / ${size + 1})`;
    }
}

// Etch-A-Sketch Functionality
function enableDraw() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "black";
        })
    });
}

// Header Button
const newGridBtn = document.querySelector("button.header-right");
newGridBtn.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Please enter the number of squares per side for the new grid"));
    clearGrid();
    gridSize = validateInput(gridSize);
    createGrid(gridSize);
});

function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.innerHTML = "";
}

function validateInput(num) {
    if (num > SQUARE_LIMIT) num = SQUARE_LIMIT;
    return num;
}
