const NUM_OF_SQUARES = 16 * 16;

// Create 16x16 grid of square divs
const gridContainer = document.querySelector(".grid-container");
for (let count = 0; count < NUM_OF_SQUARES; count++) {
    let square = document.createElement("div");
    square.classList.add("square");
    gridContainer.appendChild(square);
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
        square.style.backgroundColor = "black";
    })
});