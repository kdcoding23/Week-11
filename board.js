// defining the different ways to win the game
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

let board;
let turn = 'X';
let win;

// Array.from method selects each square from inside the board
const squares = Array.from(document.querySelectorAll('#board div'));

// EVENT-LISTENERS: when the board is clicked on, h2 will change and when the restart button is clicked, the board will clear (like the init function below)
document.getElementById('board').addEventListener('click', handleTurn);
const messages = document.querySelector('h2');
document.getElementById('restart-button').addEventListener('click', init);


// checks for a winner after every turn
function getWinner() {
    let winner = null;
    winningCombos.forEach(function(combo, index) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]] === board[combo[2]]) winner = board[combo[0]];
        });
        if (winner) {
            return winner 
          } else if (board.includes('')) {
            return null // no winner yet
          } else {
            return "Tie!";
        };
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    if (turn === 'X') {
        turn = 'O' 
        } 
        else {
        turn = 'X' 
    };
    win = getWinner();
    render();
};

// visualizing the literal object (tic-tac-toe board) by mimicking it below
function init() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

function render() {
    board.forEach(function(mark, index) {
    //this moves the value of the board item into the squares[idx]
    squares[index].textContent = mark;
    });
    // ternary operator (I prefer if-else statements for now but they were interesting to learn about!)
    messages.textContent = win === 'T' ? `That's a tie!` : win ? `${win} wins the game!` : `It's ${turn}'s turn!`;
    };

init();