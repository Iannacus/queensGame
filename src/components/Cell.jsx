import PropTypes from "prop-types";

import Mark from "../assets/Mark";
import Queen from "../assets/Queen";
import Diagonals from "../assets/Diagonals";

export default function Cell({
  color,
  size,
  isWrong,
  state,
  isBlocked,
  invalid,
  onClick,
  border = {},
}) {
  const getBorder = (border) => {
    if (Object.keys(border).length > 0) {
      const { bottom, right } = border;
      if (!bottom) return "border-b border-r-2";
      if (!right) return "border-r border-b-2";
      return "border-b-2 border-r-2";
    }
    return "border-b border-r";
  };
  return (
    <div
      className={`relative ${size || "w-[11.11%]"} aspect-square ${getBorder(
        border
      )} border-slate-900 flex justify-center items-center ${color} ${
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
  size: PropTypes.string,
  isWrong: PropTypes.bool,
  state: PropTypes.oneOf(["empty", "x", "queen"]),
  isBlocked: PropTypes.bool,
  invalid: PropTypes.bool,
  onClick: PropTypes.func,
  border: PropTypes.arrayOf(PropTypes.string),
};
