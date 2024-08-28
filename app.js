let boxes = document.querySelectorAll(".Box");
let resetbutton = document.querySelector("#Reset-button");
let newgamebutton = document.querySelector("#New-button");
let msgcontainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    boxenabled();  // Corrected the function name here
    msgcontainer.classList.add("hide");
};

boxes.forEach((Box) => {
    Box.addEventListener("click", () => {
        if (turn0) {
            Box.innerText = "0";
            turn0 = false;
        } else {
            Box.innerText = "X";
            turn0 = true;
        }
        Box.disabled = true;
        checkWinner(); // Corrected function name to match definition
    });
});

const boxdisabled = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const boxenabled = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulations, Winner is ${Winner}`; // Corrected string interpolation
    msgcontainer.classList.remove("hide");
    boxdisabled();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1vl = boxes[pattern[0]].innerText;
        let pos2vl = boxes[pattern[1]].innerText;
        let pos3vl = boxes[pattern[2]].innerText;

        if (pos1vl !== "" && pos2vl !== "" && pos3vl !== "") {
            if (pos1vl === pos2vl && pos2vl === pos3vl) {
                showWinner(pos1vl);
            }
        }
    }
};

newgamebutton.addEventListener("click", resetGame);
resetbutton.addEventListener("click", resetGame);
