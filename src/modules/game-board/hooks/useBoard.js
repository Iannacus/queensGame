import { useState } from "react";
import {
  transformBoard,
  boardCopy,
  markCellWithX,
  markCellWithQueen,
  unmarkCell,
} from "../../../utils/boardOperations";
import { validateBoard } from "../../../utils/boardValidations";



export default function useBoard() {
  const sizes = {
    5: "w-[20%]",
    6: "w-[16.666666666666668%]",
    7: "w-[14.285714285714286%]",
    8: "w-[12.5%]",
    9: "w-[11.11111111111111%]",
    10: "w-[10%]",
    11: "w-[9.090909090909092%]",
    12: "w-[8.333333333333334%]",
  };

  const [board, setBoard] = useState([]);

  const changeBoard = (board) => {
    setBoard(transformBoard(board));
  };

  const handleBoard = (newBoard) => {
    setBoard(newBoard);
  };

  const markCell = (data) => {
    const copy = boardCopy(board);
    const currentCell = board[data.row][data.col];

    if (currentCell.state === "empty") {
      markCellWithX(handleBoard, copy, data.col, data.row);
      return;
    }

    if (currentCell.state === "x") {
      markCellWithQueen(handleBoard, copy, data.col, data.row);
      return;
    }

    unmarkCell(handleBoard, copy, data.col, data.row);
  };

  const isGameComplete = () => {
    const isValid = validateBoard(board);
    return isValid;
  };

  const getBorders = (row, col) => {
    const borders = {};
    const cell = board[row][col];

    const boardLength = board.length - 1;

    if (col < boardLength) {
      const rightCell = board[row][col + 1];
      if (cell.color !== rightCell.color) {
        borders.right = true;
      }
    }
    if (row < boardLength) {
      const bottomCell = board[row + 1][col];
      if (cell.color !== bottomCell.color) {
        borders.bottom = true;
      }
    }

    return borders;
  };

  return {
    board,
    changeBoard,
    markCell,
    isGameComplete,
    getBorders,
    sizes,
  };
}
