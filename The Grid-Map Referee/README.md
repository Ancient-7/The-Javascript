# The Grid-Map Refferee

## 🔧The Concept:
**In many game genres (tactical strategies, chess, checkers, tic-tac-toe, connect four), the entire map is represented behind the scenes as a `2D Array (a Matrix)`. Managing coordinate systems, checking boundaries, and validating linear pathways (horizontal, vertical, diagonal) is a foundational skill every game engine and systems developer must master.**

## 😤 The Challenge:
- **You are building the referee engine for a custom tactical grid game played on a $5 \times 5$ board. Two players ("X" and "O") place tokens on the board. The game is won if a player gets 3 of their tokens in a continuous line - either horizontally, vertically, or diagonally.**

- **Your job is to write a function checkWinner(board) that scans the entire map and returns the winner ("X", "O"), or "Draw" if no one has 3 in a row, or "Ongoing" if the game isn't finished yet.**

## 🎯 The Rules of Pure Logic (also goal):
- **`No Language Tricks:` You cannot use advanced JS utilities. Solve this using basic loops, matrix indices (e.g., board[row][col]), and conditional math.**

- **`Spatial Scanning:` Your algorithm must gracefully inspect boundaries. If it checks a token at the edge of the board, it must be smart enough not to look "out of bounds" (which would throw an error like Cannot read property of undefined).**

- **`Scale Thinking:` Try to think about how you would solve this if the board suddenly grew to $100 \times 100$. Don't just hardcode every single coordinate line!**

## 🧠 What I learned:
**I learned the importance of `paper and pen`, like if I or you tired to solve it in mind then it become `more complex`, but paper and pen made it `very very easy` to solve.**

## 💻 Code snippet: 

*Core Javascript logic to check horizontal win*

```Javascript
function checkHorizontal(board, row, col){
  if ( board[row][col] == board[row][col + 1] && board[row][col] != "-" ){
    if ( board[row][col] == board[row][col + 2] ){
      return true
    }
  }
  return false
}
```