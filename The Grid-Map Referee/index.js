// checking horizontal win
function checkHorizontal(board, row, col){
  if ( board[row][col] == board[row][col + 1] && board[row][col] != "-" ){
    if ( board[row][col] == board[row][col + 2] ){
      return true
    }
  }
  return false
}

// checking virtical win
function checkVertical(board, row, col){
  if ( board[row][col] == board[row + 1][col] && board[row][col] != "-" ){
    if ( board[row][col] == board[row + 2][col] ){
      return true
    }
  }
  return false
}

// checking right diagonal win
function checkRightDiagonal(board, row, col){
  if ( board[row][col] == board[row + 1][col + 1] && board[row][col] != "-" ){
    if ( board[row][col] == board[row + 2][col + 2] ){
      return true
    }
  }
  return false
}

// checking left diagonal win
function checkLeftDiagonal(board, row, col){
  if ( board[row][col] == board[row + 1][col - 1] && board[row][col] != "-" ){
    if ( board[row][col] == board[row + 2][col - 2] ){
      return true
    }
  }
  return false
}

function checkWinner(board) {
  // Your logical engine goes here
  // Return "X", "O", "Draw", or "Ongoing"

  // getting rows and cols index of board
  const rows = board.length - 1;
  const cols = board[0].length - 1;

  // rows and cols must be same
  if (!(rows == cols)){
    return "Matrix with different number of rows and cols are not allowed."
  }

  // setting threshold value
  // It is boundary so code don't check for value out of an array. (5 x 5 can't check for board[4][5], it's outofbound error)
  const thresholdValue = rows - 2; // cols - 2 is also same

  // draw ??
  let draw = true;

  // we can't use any advance js utilities so we need to use clasic for loop.
  for (let row = 0; row <= rows; row++) {
    for (let col = 0; col <= cols; col++) {

      // checking if game is ongoing or draw
      if (board[row][col] == "-"){
        draw = false
      }

      // horizontal check
      if ( col <= thresholdValue){
        let win = checkHorizontal(board, row, col)
        if (win){
          return board[row][col]
        }
      }

      // vertical check
      if (row <= thresholdValue) {
        let win = checkVertical(board, row, col);
        if (win) {
          return board[row][col];
        }
      }

      // left diagional check
      // no matter what, if col is less the 2 then left diagonal win is not possible
      if(col >= 2 && row <= thresholdValue){
        let win = checkLeftDiagonal(board, row, col)
        if (win) {
          return board[row][col];
        }
      }

      // right diagional check
      if(col <= thresholdValue && row <= thresholdValue){
        let win = checkRightDiagonal(board, row, col)
        if (win) {
          return board[row][col];
        }
      }

    }

  }

  if (draw){
    return "Draw"
  }
  return "Ongoing"
}


// ==========================================
// 🛠️ TEST CASES - DO NOT CHANGE 🛠️
// ==========================================

// Test 1: Horizontal Win for X (Row 2 has three 'X's)
const board1 = [
  ["-", "-", "O", "-", "-"],
  ["-", "X", "X", "X", "-"],
  ["O", "-", "-", "-", "O"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
];
console.log("Test 1 Result (Expected: X):", checkWinner(board1));

// Test 2: Vertical Win for O (Column 3 has three 'O's)
const board2 = [
  ["X", "-", "O", "-", "-"],
  ["-", "X", "O", "-", "-"],
  ["-", "-", "O", "-", "X"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
];
console.log("Test 2 Result (Expected: O):", checkWinner(board2));

// Test 3: Diagonal Win for X (Top-Left to Bottom-Right angle)
const board3 = [
  ["X", "-", "-", "-", "-"],
  ["-", "X", "-", "O", "-"],
  ["-", "-", "X", "-", "-"],
  ["-", "O", "-", "-", "-"],
  ["-", "-", "-", "-", "O"],
];
console.log("Test 3 Result (Expected: X):", checkWinner(board3));

// Test 4: Game is still ongoing (Empty spots exist, no one has 3 in a row)
const board4 = [
  ["X", "O", "X", "-", "-"],
  ["-", "X", "O", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-"],
];
console.log("Test 4 Result (Expected: Ongoing):", checkWinner(board4));
