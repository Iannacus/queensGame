import Cell from "../../../components/Cell";
import useBuilder from "../hooks/useBuilder";
import { colors, colorsDic } from "../../../utils/colorClasses";

export default function Builder() {
  const { board, updateBoard, color, changeColor, changeSize, addBoard } =
    useBuilder();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4 bg-slate-950">
      <div className="flex">
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Color de celda
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
              onChange={(e) => {
                changeColor(e.target.value);
              }}
            >
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="sm:col-span-3">
          <label
            htmlFor="country"
            className="block text-sm/6 font-medium text-gray-900"
          >
            Tamaño de tablero
          </label>
          <div className="mt-2">
            <select
              id="country"
              name="country"
              autoComplete="country-name"
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm/6"
              onChange={(e) => changeSize(e.target.value)}
            >
              <option value={5}>5 x 5</option>
              <option value={6}>6 x 6</option>
              <option value={7}>7 x 7</option>
              <option value={8}>8 x 8</option>
              <option value={9}>9 x 9</option>
              <option value={10}>10 x 10</option>
              <option value={11}>11 x 11</option>
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-[500px] min-w-[350px] px-[10px]">
        {board.map((row, i) => (
          <div key={i} className="flex">
            {row.map((cell, j) => (
              <Cell
                key={j}
                color={colorsDic[cell.color]}
                onClick={() => {
                  const newBoard = [...board];
                  newBoard[i][j].color = color;
                  updateBoard(newBoard);
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => addBoard(board)}
        >
          Agregar tablero
        </button>
      </div>
    </div>
  );
}
