const cells = document.querySelectorAll(".cell"); // get all cells

const winningPattrn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]
]

let currentPlayer = "X";
let selections = [];

gameOn = false;

function initializeGame() {
    cells.forEach(cell => {
        cell.addEventListener("click", cellClicked);
    })
    document.querySelector("#restartBtn").addEventListener("click", restartGame);
    gameOn = true;
}

function cellClicked() {
    if (gameOn)
    {
        let cellIndex = this.id;
        console.log(this.id)

        if (cells[cellIndex].innerText == "")
        {
            selections.push(cellIndex);
            cells[cellIndex].innerText = currentPlayer;
            checkWinner();
            changePlayer();
        }
    }
}

function changePlayer() {
    if (currentPlayer == "X") currentPlayer = "O";
    else currentPlayer = "X";
    return;
}

function checkWinner() {
    for (let pattern of winningPattrn)
    {
        let cellA = cells[pattern[0]].innerText
        let cellB = cells[pattern[1]].innerText
        let cellC = cells[pattern[2]].innerText

        if (cellA != "" && cellB != "" && cellC != "")
        {
            if (cellA == cellB && cellB == cellC)
            {
                cells[pattern[0]].style.backgroundColor = 'lightgreen';
                cells[pattern[1]].style.backgroundColor = 'lightgreen';
                cells[pattern[2]].style.backgroundColor = 'lightgreen';
                
                gameOn = false;
                return;
            }
        }
        
    }
}

function restartGame() {
    if (gameOn)
    {
        if (selections.length == 9)
        {
            gameOn = false;
            restartGame();
        }
    }
    cells.forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '';
    });
    document.getElementById('restartBtn').innerText = "Restart Now";
    selections = [];
    gameOn = true;
}


initializeGame()