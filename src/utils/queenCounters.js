export function verifyRow(board, row, col) {
    let queens = 0;
    board[row].forEach((item) => {
      if (item.state === "queen") {
        queens++;
      }
    });
    return queens;
  }
  
  export function verifyCol(board, row, col) {
    let queens = 0;
    board.forEach((item) => {
      if (item[col].state === "queen") {
        queens++;
      }
    });
  
    return queens;
  }
  
  export function verifyColor(board, col, row, color) {
    let crowns = 0;
  
    board.forEach((item) => {
      item.forEach((cell) => {
        if (cell.color === color && cell.state === "queen") {
          crowns++;
        }
      });
    });
  
    return crowns;
  }