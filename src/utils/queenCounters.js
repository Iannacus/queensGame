export function queensInRow(board, row, col) {
  let queens = 0;
  board[row].forEach((item) => {
    if (item.state === "queen") {
      queens++;
    }
  });
  return queens;
}

export function queensInCol(board, row, col) {
  let queens = 0;
  board.forEach((item) => {
    if (item[col].state === "queen") {
      queens++;
    }
  });

  return queens;
}

export function queensInColor(board, col, row, color) {
  let queens = 0;

  board.forEach((item) => {
    item.forEach((cell) => {
      if (cell.color === color && cell.state === "queen") {
        queens++;
      }
    });
  });

  return queens;
}
