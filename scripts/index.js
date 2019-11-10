
function createBoard() {
    
    let board = [];

    for(let i=0; i<8; i++){

        let boardString = [];
        
        for(let j=0; j<8; j++){
            let color = ((i + j) % 2 === 0) ? "black" : "white";
            boardString.push({
                i: i,
                j: j,
                color: color,
                fig: 0 
            }) 
        }

        board.push(boardString);

    }

    return board;
}

function showBoard(board) {
    const coordsLabel = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let stringHtml = "";

    for(let i=0; i<10;i++) {
        if((i>=1) && (i<=8)){
            stringHtml += `<div class="coordcell">${coordsLabel[i-1]}</div>`
        }
        else {
            stringHtml += `<div class="coordcell"></div>`
        }
    }

    for(let i=7; i>-1; i--){
        stringHtml += `<div class="coordcell">${i + 1}</div>`;
        for(let j=7; j>-1; j--){
            stringHtml += `<div class="cell ${board[i][j].color}"></div>`;
        }
        stringHtml += `<div class="coordcell">${i + 1}</div>`;
    }

    for(let i=0; i<10;i++) {
        if((i>=1) && (i<=8)){
            stringHtml += `<div class="coordcell">${coordsLabel[i-1]}</div>`
        }
        else {
            stringHtml += `<div class="coordcell"></div>`
        }
    }

    document.querySelector(".board").innerHTML = stringHtml;
}

let board = createBoard();