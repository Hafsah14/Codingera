// Noughts and Crosses Game

// Create a 3x3 board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// Print the board
board.forEach(row => {
  console.log(row.join('|'));
});
