import { useParams } from "react-router-dom";
import GameBoard from "../components/GameBoard";

import { boards } from "../../../boards/hard";
import useTimer from "../hooks/useTimer";

function Game() {
  const { timer } = useTimer();

  const { boardNumber } = useParams();

  return (
    <div className="bg-slate-950 h-screen flex flex-col justify-start items-center gap-12">
      <h2 className="text-white">{timer}</h2>
      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        <GameBoard board={boards[boardNumber - 1]} />
      </div>
    </div>
  );
}

export default Game;
