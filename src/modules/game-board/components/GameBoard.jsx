import { useEffect } from "react";
import PropTypes from "prop-types";
import Cell from "../../../components/Cell";

import useBoard from "../hooks/useBoard";

import { colorsDic } from "../../../utils/colorClasses";

export default function GameBoard({
  board,
  onComplete,
  resetBoard,
  handleReset,
}) {
  const {
    board: gameBoard,
    changeBoard,
    markCell,
    isGameComplete,
    getBorders,
    sizes,
  } = useBoard();

  useEffect(() => {
    if (resetBoard) {
      changeBoard(board);
      handleReset();
    }
  }, [resetBoard]);

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
              size={sizes[gameBoard.length]}
              isWrong={cell.isWrong}
              state={cell.state}
              isBlocked={cell.blocked}
              invalid={cell.invalid}
              border={getBorders(i, j)}
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
  resetBoard: PropTypes.bool,
  handleReset: PropTypes.func.isRequired,
};
