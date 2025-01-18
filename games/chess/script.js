const Board = document.getElementById("board");
let square = function square(color, position, piece) {
    return {
        "color": color,
        "position": position,
        "piece": piece
    }
}
const maxSquares = 64;
const maxLength = 8;
const maxWidth = 8;

let initPiecePosition = {
    "♟️": ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2",
            "a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"
    ],
    "♜": ["a1", "h1", "a8", "h8"],
    "♞": ["b1", "g1", "b8", "g8"],
    "♝": ["c1", "f1", "c8", "f8"],
    "♚": ["e1", "e8"],
    "♛": ["d1", "d8"]
}

const colLabel = ["a", "b", "c", "d", "e", "f", "g", "h"]

// basic layout of the board
function createBoard() {
    for (let i = 0; i < maxLength; i++) {
        // create element for row
        let row = document.createElement("div");
        row.className = "row";
        row.title = i;
        Board.appendChild(row);
        // create squares
        for (let j = 0; j < maxLength; j++) {
            // create square element
            let currentSquare = document.createElement("div");
            currentSquare.id = colLabel[j] + (8 - i);
            currentSquare.className = "square";
            
            // set square color
            if (i % 2 == 0) {
                currentSquare.style.backgroundColor = j % 2 == 0 ? "white" : "black"; 
                currentSquare.style.color = j % 2 == 0 ? "black" : "white";
            }
            else {
                currentSquare.style.backgroundColor = j % 2 == 0 ? "black" : "white";
                currentSquare.style.color = j % 2 == 0 ? "white" : "black";
            }
            
            // append Square to the Board
            row.appendChild(currentSquare);
            currentSquare.addEventListener("click", move)
        }
        

    }
    assignBoard();
};

function assignBoard() {
    
    console.log(initPiecePosition)
    for (const [key, value] of Object.entries(initPiecePosition)) {
        for (let p of value) {
            document.querySelector("#" + p).innerText = key;
        }
        
    }
    
}
function move() {
    // implement move function
}
document.addEventListener('DOMContentLoaded', createBoard);
