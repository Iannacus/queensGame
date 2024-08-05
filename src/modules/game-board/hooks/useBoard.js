import { useState } from 'react'
import { transformBoard, boardCopy, markCellWithX, markCellWithQueen, unmarkCell } from '../../../utils/boardOperations'

export default function useBoard() {
  const [board, setBoard] = useState([])

  const changeBoard = (board) => {
    setBoard(transformBoard(board))
  }

  const handleBoard = (newBoard) => {
    setBoard(newBoard);
  }

  const markCell = (data) => {
    const copy = boardCopy(board);
    const currentCell = board[data.row][data.col];

    if(currentCell.state === "empty") {
      markCellWithX(handleBoard, copy, data.col, data.row);
      return;
    }

    if(currentCell.state === "x") {
      markCellWithQueen(handleBoard, copy, data.col, data.row);
      return;
    }
    
    unmarkCell(handleBoard, copy, data.col, data.row);
  }

  return {
    board,
    changeBoard,
    markCell
  }

}