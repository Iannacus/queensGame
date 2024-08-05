import React, { useEffect } from 'react'
import Cell from '../../../components/Cell'

import useBoard from '../hooks/useBoard'

import { colorsDic } from '../../../utils/colorClasses'

export default function GameBoard({ board }) {
  const { board: gameBoard, changeBoard, markCell } = useBoard()


  useEffect(() => {
    changeBoard(board)
  }, []);

  return (
    <>
      {gameBoard.map((row, i) => (
        <div key={i} className='flex'>
          {row.map((cell, j) => (
            <Cell key={j}
              color={colorsDic[cell.color]}
              isWrong={cell.isWrong}
              state={cell.state}
              isBlocked={cell.blocked}
              invalid={cell.invalid}
              onClick={() => markCell({row: cell.row, col: cell.col, color: colorsDic[cell.color]})}
            />
          ))}
        </div>
      ))}
    </>
  )
}


