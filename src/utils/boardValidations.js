import { colors } from "./colorClasses";
import {
  makeCellInvalid,
  makeColInvalid,
  makeColorInvalid,
  makeRowInvalid,
} from "./invalidRows";
import { queensInRow, queensInCol, queensInColor } from "./queenCounters";

export function validateNewQueen(board, col, row) {
  validateCorners(board, col, row);
  isSameRow(board, col, row);
  isSameCol(board, col, row);
  isSameColor(board, col, row);
}

export function validateBoard (board){
  if (board.length === 0) return false;

  let totalQueens = 0;
  let isValid = true;

  board.forEach((row) => {
    row.forEach((cell) => {
      if (cell.isWrong) isValid = false;
      if (cell.state === "queen") totalQueens += 1;
    });
  });

  return totalQueens === board.length && isValid;
}

export function isSameRow(board, col, row) {
  let queens = queensInRow(board, row, col);

  if (queens >= 2) makeRowInvalid(board, row);

  board[row].forEach((item) => {
    if (item.state === "queen" && queens > 1) {
      board[row][item.col].isWrong = true;
    }
  });
}

export function isSameCol(board, col, row) {
  let queens = queensInCol(board, row, col);

  if (queens >= 2) {
    makeColInvalid(board, col);
  }

  board.forEach((item) => {
    if (item[col].state === "queen" && queens > 1) {
      item[col].isWrong = true;
    }
  });
}

export function isSameColor(board, col, row) {
  const color = board[row][col].color;
  const queens = queensInColor(board, col, row, color);

  if (queens >= 2) makeColorInvalid(board, color);

  board.forEach((item) => {
    item.forEach((cell) => {
      if (cell.color === color && cell.state === "queen" && queens > 1) {
        cell.isWrong = true;
        board[row][col].isWrong = true;
      }
    });
  });
}

export function validateCorners(board, col, row) {
  const len = board.length - 1;

  if (isUL(board, row, col)) {
    board[row][col].isWrong = true;
    board[row - 1][col - 1].isWrong = true;
    makeCellInvalid(board, col, row);
    makeCellInvalid(board, col - 1, row - 1);
  }
  if (isUR(board, row, col, len)) {
    board[row][col].isWrong = true;
    board[row - 1][col + 1].isWrong = true;
    makeCellInvalid(board, col, row);
    makeCellInvalid(board, col + 1, row - 1);
  }
  if (isDL(board, row, col, len)) {
    board[row][col].isWrong = true;
    board[row + 1][col - 1].isWrong = true;
    makeCellInvalid(board, col, row);
    makeCellInvalid(board, col - 1, row + 1);
  }
  if (isDR(board, row, col, len)) {
    board[row][col].isWrong = true;
    board[row + 1][col + 1].isWrong = true;
    makeCellInvalid(board, col, row);
    makeCellInvalid(board, col + 1, row + 1);
  }
}

export const isUL = (board, row, col) => {
  if (row === 0 || col === 0) return false;
  return board[row - 1][col - 1].state === "queen";
};

export const isUR = (board, row, col, len) => {
  if (row === 0 || col === len) return false;
  return board[row - 1][col + 1].state === "queen";
};

export const isDL = (board, row, col, len) => {
  if (row === len || col === 0) return false;
  return board[row + 1][col - 1].state === "queen";
};

export const isDR = (board, row, col, len) => {
  if (row === len || col === len) return false;
  return board[row + 1][col + 1].state === "queen";
};

export const validateInvalidRows = (board) => {
  board.forEach((_, i) => {
    if (queensInRow(board, i, 0) >= 2) {
      makeRowInvalid(board, i);
    }
  });
};

export const validateInvalidCols = (board) => {
  const len = board.length - 1;

  for (let i = 0; i < len; i++) {
    if (queensInCol(board, 0, i) >= 2) {
      makeColInvalid(board, i);
    }
  }
};

export const validateInvalidColors = (board) => {
  colors.forEach((color) => {
    if (queensInColor(board, 0, 0, color) >= 2) {
      makeColorInvalid(board, color);
    }
  });
};
