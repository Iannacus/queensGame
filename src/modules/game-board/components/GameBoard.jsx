import { useEffect } from "react";
import PropTypes from "prop-types";
import Cell from "../../../components/Cell";

import useBoard from "../hooks/useBoard";

import { colorsDic } from "../../../utils/colorClasses";

export default function GameBoard({ board, onComplete }) {
  const {
    board: gameBoard,
    changeBoard,
    markCell,
    isGameComplete,
  } = useBoard();

  useEffect(() => {
    changeBoard(board);
  }, []);

  useEffect(() => {
    if (isGameComplete()) {
      onComplete();
    }
  }, [gameBoard]);

  return (
    <>
      {gameBoard.map((row, i) => (
        <div key={i} className="flex">
          {row.map((cell, j) => (
            <Cell
              key={j}
              color={colorsDic[cell.color]}
              isWrong={cell.isWrong}
              state={cell.state}
              isBlocked={cell.blocked}
              invalid={cell.invalid}
              onClick={() =>
                markCell({
                  row: cell.row,
                  col: cell.col,
                  color: colorsDic[cell.color],
                })
              }
            />
          ))}
        </div>
      ))}
    </>
  );
}

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  onComplete: PropTypes.func.isRequired,
};
