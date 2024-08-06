import { isDL, isDR, isUL, isUR, isSameColor, isSameCol, isSameRow, validateCorners } from "./boardValidations";
import { verifyCol, verifyColor, verifyRow } from "./queenCounters";

export function cleanCells(board, row, col) {
    cleanRow(board, row, col);
    cleanCol(board, row, col);
    cleanColors(board, row, col);
    cleanCorners(board, row, col);
    cleanCell(board, row, col);
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