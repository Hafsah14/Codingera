// Noughts and Crosses Game

// Create a 3x3 board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

function printBoard() {
  board.forEach(row => {
    console.log(row.join('|'));
  });
}

function makeMove(player, row, col) {
  if (board[row][col] === ' ') {
    board[row][col] = player;
    return true;
  } else {
    console.log("That spot is already taken!");
    return false;
  }
}

// Example move
makeMove('X', 0, 0);
printBoard();
