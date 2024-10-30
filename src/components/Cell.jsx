import PropTypes from "prop-types";

import Mark from "../assets/Mark";
import Queen from "../assets/Queen";
import Diagonals from "../assets/Diagonals";

export default function Cell({
  color,
  isWrong,
  state,
  isBlocked,
  invalid,
  onClick,
}) {
  return (
    <div
      className={`relative w-[11.11%] aspect-square border-b border-r border-slate-900 flex justify-center items-center ${color} ${
        isWrong ? "text-red-500" : "text-slate-900"
      }`}
      onClick={isBlocked ? () => {} : () => onClick()}
    >
      <div className={state === "queen" ? "w-1/2" : "w-1/4"}>
        {state === "queen" && (
          <Queen color={isWrong ? "fill-red-600" : "fill-zinc-950"} />
        )}
        {state === "x" && (
          <Mark color={isWrong ? "fill-red-600" : "fill-zinc-950"} />
        )}
      </div>
      {invalid && (
        <div className="absolute top-0 left-0 ">
          <Diagonals width="100%" color="stroke-red-600" />
        </div>
      )}
    </div>
  );
}

Cell.propTypes = {
  color: PropTypes.string,
  isWrong: PropTypes.bool,
  state: PropTypes.oneOf(["empty", "x", "queen"]),
  isBlocked: PropTypes.bool,
  invalid: PropTypes.bool,
  onClick: PropTypes.func,
};
