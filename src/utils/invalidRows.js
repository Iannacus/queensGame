export function makeCellInvalid(board, col, row) {
  board[row][col].invalid = true;
}

export function makeRowInvalid(board, row) {
  board[row].forEach((item) => {
    item.invalid = true;
  });
}

export function makeColInvalid(board, col) {
  board.forEach((rowItem) => {
    rowItem[col].invalid = true;
  });
}

export function makeColorInvalid(board, color) {
  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell.color === color) {
        cell.invalid = true;
      }
    });
  });
}
