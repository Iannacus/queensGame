import { createBrowserRouter } from "react-router-dom";
import Levels from "../modules/levels/pages/Levels";
import Game from "../modules/game-board/pages/Game";
import Builder from "../modules/board-builder/pages/Builder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Levels />,
  },
  {
    path: "/board/:boardNumber",
    element: <Game />,
  },
  {
    path: "builder",
    element: <Builder />,
  },
]);

export default router;
