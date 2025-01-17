let parent = document.getElementById("board");
function createBoard() {
    /*
        Board
        size = 8 / 8
    */
    
    for (let i = 0; i < 8; i++) {
        let row = document.createElement("div");
        row.className = "row";
        parent.appendChild(row);
        for (let j = 0; j < 8; j++) {
            let child = document.createElement('div');
            child.id = "cell" + i + j;
            child.className = "cell";
            
            if (i % 2 == 0) {
                if (j % 2 == 0) {
                    child.style.backgroundColor = "white";
                }
                else {
                    child.style.backgroundColor = "black";
                }
            }
            else if (i % 2 != 0) {
                if (j % 2 == 0) {
                    child.style.backgroundColor = "black";
                }
                else {
                    child.style.backgroundColor = "white";
                }
            }

            
            row.appendChild(child);
        }
    }
}
createBoard();