export const transformBoard = (board) => {
  return board.map((row, i) => transformRow(row, i));
};

const transformRow = (row, i) => {
  return row.map((cell, j) => ({
    color: cell.color,
    col: j,
    row: i,
    state: cell.blocked ? "queen" : "empty",
    isWrong: false,
    invalid: false,
    blocked: cell.blocked,
  }));
};

export const boardCopy = (board) => {
  return board.map((row) => row.map((cell) => ({ ...cell })));
};

export const markCellWithX = (handleBoard, board, col, row) => {
  board[row][col].state = "x";
  handleBoard(board);
};

export const markCellWithQueen = (handleBoard, board, col, row) => {
  board[row][col].state = "queen";
  validateNewQueen(board, col, row);
  handleBoard(board);
};

export const unmarkCell = (handleBoard, board, col, row) => {
  board[row][col].state = "empty";
  cleanCells(board, row, col);
  handleBoard(board);
};

// * Global validation

function validateNewQueen(board, col, row) {
  validateCorners(board, col, row);
  isSameRow(board, col, row);
  isSameCol(board, col, row);
  isSameColor(board, col, row);
}

function cleanCells(board, row, col) {
  cleanRow(board, row, col);
  cleanCol(board, row, col);
  cleanColors(board, row, col);
  cleanCorners(board, row, col);
  cleanCell(board, row, col);
}

// * Cell validation

function validateCorners(board, col, row) {
  console.log(col, row);
  const len = board.length - 1;

  if (isUL(board, row, col)) {
    board[row][col].isWrong = true;
    board[row - 1][col - 1].isWrong = true;
  }
  if (isUR(board, row, col, len)) {
    board[row][col].isWrong = true;
    board[row - 1][col + 1].isWrong = true;
  }
  if (isDL(board, row, col, len)) {
    board[row][col].isWrong = true;
    board[row + 1][col - 1].isWrong = true;
  }
  if (isDR(board, row, col, len)) {
    board[row][col].isWrong = true;
    board[row + 1][col + 1].isWrong = true;
  }
}

const isUL = (board, row, col) => {
  if(row === 0 || col === 0) return false;
  return board[row - 1][col - 1].state === "queen"
};

const isUR = (board, row, col, len) => {
  if (row === 0 || col === len) return false;
  return board[row - 1][col + 1].state === "queen";
};

const isDL = (board, row, col, len) => {
  if (row === len || col === 0) return false;
  return board[row + 1][col - 1].state === "queen";
};

const isDR = (board, row, col, len) => {
  if (row === len || col === len) return false;
  return board[row + 1][col + 1].state === "queen";
};

function isSameRow(board, col, row) {
  let crowns = verifyRow(board, row, col);

  board[row].forEach((item) => {
    if (item.state === "queen" && crowns > 1) {
      board[row][item.col].isWrong = true;
      makeRowInvalid(board, row);
    }
  });
}

function isSameCol(board, col, row) {
  let crowns = verifyCol(board, row, col);

  board.forEach((item) => {
    if (item[col].state === "queen" && crowns > 1) {
      item[col].isWrong = true;
      makeColInvalid(board, col);
    }
  });
}

function isSameColor(board, col, row) {
  const color = board[row][col].color;
  const crowns = verifyColor(board, col, row, color);
  board.forEach((item) => {
    item.forEach((cell) => {
      if (cell.color === color && cell.state === "queen" && crowns > 1) {
        cell.isWrong = true;
        board[row][col].isWrong = true;
      }
    });
  });
}

function verifyRow(board, row, col) {
  let queens = 0;
  board[row].forEach((item) => {
    if (item.state === "queen") {
      queens++;
    }
  });
  return queens;
}

function verifyCol(board, row, col) {
  let queens = 0;
  board.forEach((item) => {
    if (item[col].state === "queen") {
      queens++;
    }
  });

  return queens;
}

function verifyColor(board, col, row, color) {
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

function makeRowInvalid(board, row) {
  board[row].forEach((item) => {
    item.invalid = true;
  });
}

function makeColInvalid(board, col) {
  board.forEach((rowItem) => {
    rowItem[col].invalid = true;
  });
}

function cleanCell(board, row, col) {
  board[row][col].isWrong = false;
}

function cleanRow(board, row, col) {
  const crowns = verifyRow(board, row, col);
  board[row].forEach((item) => {
    if (crowns === 1){
      if( item.state === "queen") {
        board[row][item.col].isWrong = false;
        isSameColor(board, item.col, row);
        isSameCol(board, item.col, row);
        validateCorners(board, item.col, row);
      }
    }
  });
}

function cleanCol(board, row, col) {
  const crowns = verifyCol(board, row, col);

  board.forEach((rowItem) => {
    if (crowns === 1) {
      rowItem[col].invalid = false;
      rowItem[col].isWrong = false;
      if (rowItem[col].state === "queen") {
        isSameColor(board, col, rowItem[col].row);
        isSameRow(board, col, rowItem[col].row);
        validateCorners(board, col, rowItem[col].row);
      }
    }
  });
}

function cleanColors(board, row, col) {
  const color = board[row][col].color;
  const crowns = verifyColor(board, col, row, color);
  board.forEach((item) => {
    item.forEach((cell) => {
      if (crowns === 1 && cell.color === color && cell.state === "queen") {
        cell.isWrong = false;
        isSameRow(board, cell.col, cell.row);
        isSameCol(board, cell.col, cell.row);
        validateCorners(board, cell.col, cell.row);
      }
    });
  });
}

function cleanCorners(board, row, col) {
  const len = board.length - 1;

  if (isUL(board, row, col)) {
    board[row - 1][col - 1].isWrong = false;
    isSameRow(board, col - 1, row - 1);
    isSameCol(board, col - 1, row - 1);
    isSameColor(board, col - 1, row - 1);
    validateCorners(board, col - 1, row - 1);
  }
  if (isUR(board, row, col, len)) {
    board[row - 1][col + 1].isWrong = false;
    isSameRow(board, col + 1, row - 1);
    isSameCol(board, col + 1, row - 1);
    isSameColor(board, col + 1, row - 1);
    validateCorners(board, col + 1, row - 1);
  }
  if (isDL(board, row, col, len)) {
    board[row + 1][col - 1].isWrong = false;
    isSameRow(board, col - 1, row + 1);
    isSameCol(board, col - 1, row + 1);
    isSameColor(board, col - 1, row + 1);
    validateCorners(board, col - 1, row + 1);
  }
  if (isDR(board, row, col, len)) {
    board[row + 1][col + 1].isWrong = false;
    isSameRow(board, col + 1, row + 1);
    isSameCol(board, col + 1, row + 1);
    isSameColor(board, col + 1, row + 1);
    validateCorners(board, col + 1, row + 1);
  }


}
