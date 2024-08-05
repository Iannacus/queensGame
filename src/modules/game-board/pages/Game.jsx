import React from 'react'
import GameBoard from '../components/GameBoard'

import { boards } from '../../../boards/hard'

function Game() {
  return (
    <div className="m-auto max-w-[500px] min-w-[350px] px-[10px]">
      <GameBoard board={boards[1]} />
    </div>
  )
}

export default Game