import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import GameBoard from "../components/GameBoard";
import useTimer from "../hooks/useTimer";
import useReset from "../hooks/useReset";

import { boards } from "../../../boards/hard";
import Button from "../../../components/Button";

function Game() {
  const { timer, stopInterval, resetInterval } = useTimer();
  const { resetBoard, onResetBoard, cancelReset } = useReset();
  const [showNext, setShowNext] = useState(false);

  const { boardNumber } = useParams();

  const navigate = useNavigate();

  return (
    <div className="bg-slate-950 h-screen flex flex-col justify-start items-center gap-12">
      <div className="flex justify-center w-full px-4 py-2 bg-slate-900">
        neutir
      </div>
      <h2 className="text-white">{timer}</h2>
      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        <Button label="Borrar tablero" onClick={onResetBoard} />
      </div>
      <div className="max-w-[500px] min-w-[350px] border-2  border-slate-900 rounded-[20px] overflow-hidden">
        <GameBoard
          board={boards[boardNumber - 1]}
          onComplete={() => {
            stopInterval();
            setShowNext(true);
          }}
          resetBoard={resetBoard}
          handleReset={cancelReset}
        />
      </div>
      <div
        className={`max-w-[500px] min-w-[350px] px-[10px] flex gap-4 ${
          boardNumber < boards.length ? "justify-end" : "justify-start"
        }`}
      >
        {boardNumber > 1 && (
          <div className="w-1/2">
            <Button
              label="Anterior"
              onClick={() => {
                navigate(`/board/${boardNumber - 1}`);
                resetInterval();
                onResetBoard();
              }}
            />
          </div>
        )}
        {boardNumber < boards.length && showNext && (
          <div className="w-1/2">
            <Button
              label="Siguiente"
              onClick={() => {
                navigate(`/board/${Number(boardNumber) + 1}`);
                resetInterval();
                onResetBoard();
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
