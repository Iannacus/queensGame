import { useParams } from "react-router-dom";

import GameBoard from "../components/GameBoard";
import useTimer from "../hooks/useTimer";

import { boards } from "../../../boards/hard";

function Game() {
  const { timer, stopInterval } = useTimer();

  const { boardNumber } = useParams();

  return (
    <div className="bg-slate-950 h-screen flex flex-col justify-start items-center gap-12">
      <div className="flex justify-center w-full px-4 py-2 bg-slate-900">
        neutir
      </div>
      <h2 className="text-white">{timer}</h2>
      <button onClick={() => stopInterval()}>stop</button>
      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        <GameBoard board={boards[boardNumber - 1]} onComplete={stopInterval} />
      </div>
    </div>
  );
}

export default Game;
