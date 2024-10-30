import { useParams } from "react-router-dom";
import GameBoard from "../components/GameBoard";
import useTimer from "../hooks/useTimer";
import useReset from "../hooks/useReset";

import { boards } from "../../../boards/hard";
import Button from "../../../components/Button";

function Game() {
  const { timer, stopInterval } = useTimer();
  const { resetBoard, onResetBoard, cancelReset } = useReset();

  const { boardNumber } = useParams();

  return (
    <div className="bg-slate-950 h-screen flex flex-col justify-start items-center gap-12">
      <div className="flex justify-center w-full px-4 py-2 bg-slate-900">
        neutir
      </div>
      <h2 className="text-white">{timer}</h2>
      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        <Button label="Borrar tablero" onClick={onResetBoard} />
      </div>
      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        <GameBoard
          board={boards[boardNumber - 1]}
          onComplete={stopInterval}
          resetBoard={resetBoard}
          handleReset={cancelReset}
        />
      </div>
    </div>
  );
}

export default Game;
