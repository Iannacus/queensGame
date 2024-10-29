import { useParams } from "react-router-dom";
import GameBoard from "../components/GameBoard";

import { boards } from "../../../boards/hard";
import useTimer from "../hooks/useTimer";
import useBoard from "../hooks/useBoard";

function Game() {
  const { timer, stopTimer } = useTimer();

  const { boardNumber } = useParams();

  return (
    <div className="bg-slate-950 h-screen flex flex-col justify-start items-center gap-12">
      <h2 className="text-white">{timer}</h2>
      <button onClick={() => stopTimer()}>stop</button>
      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        <GameBoard board={boards[boardNumber - 1]} />
      </div>
    </div>
  );
}

export default Game;
