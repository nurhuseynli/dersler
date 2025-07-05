var attemp = 'x';
var emptyCell = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/White_square_50%25_transparency.svg/1200px-White_square_50%25_transparency.svg.png"
var gameIsGoing = true;

function play(cell) {
    if (gameIsGoing) {
        if (cell.src == emptyCell  ) {
            if (attemp == 'x') {
                cell.src = "https://upload.wikimedia.org/wikipedia/commons/c/ca/Transparent_X.png?20130727130546" 
                win()
                attemp = 'o'
             } else if (attemp == 'o') {
                cell.src = "https://pngimg.com/d/letter_o_PNG116.png"
                win()
                attemp = 'x';
             }
        }
    }
}

function win() {
    var cells = document.querySelectorAll('img');

    if ((cells[0].src == cells[1].src & cells [1].src == cells[2].src & cells[0].src != emptyCell)  |
        (cells[3].src == cells[4].src & cells [4].src == cells[5].src & cells[3].src != emptyCell)  |
        (cells[6].src == cells[7].src & cells [7].src == cells[8].src & cells[6].src != emptyCell) |
        (cells[0].src == cells[3].src & cells [3].src == cells[6].src & cells[0].src != emptyCell) |
        (cells[1].src == cells[4].src & cells [4].src == cells[7].src & cells[1].src != emptyCell) |
        (cells[2].src == cells[5].src & cells [5].src == cells[8].src & cells[2].src != emptyCell) |
        (cells[0].src == cells[4].src & cells [4].src == cells[8].src & cells[0].src != emptyCell) |
        (cells[2].src == cells[4].src & cells [4].src == cells[6].src & cells[2].src != emptyCell) ) {
        alert(`${attemp} qazandi`);
        gameIsGoing = false;
    }
}