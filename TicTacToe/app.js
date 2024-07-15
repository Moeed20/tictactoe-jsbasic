let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let turnO = true;

const winPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal top-left to bottom-right
    [2, 4, 6]  // Diagonal top-right to bottom-left
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerHTML = "";
        box.disabled = false;
    });
    turnO = true;
    document.querySelector(".winner").innerHTML = "";
});

function checkWin() {
    winPatterns.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boxes[a].innerHTML && boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML) {
            displayWinner(boxes[a].innerHTML);
        }
    });
}

function displayWinner(player) {
    const winner = document.querySelector(".winner");
    winner.innerHTML = `Player ${player === "O" ? 1 : 2} wins!`;
    winner.style.color = "green";
}
