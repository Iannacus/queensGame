import React from "react";
import PropTypes from "prop-types";

export default function Level({ level, onClick }) {
  return (
    <div
      className="flex justify-center items-center text-slate-900 bg-orange-400 w-10 aspect-square rounded-full hover:cursor-pointer"
      onClick={onClick}
    >
      {level}
    </div>
  );
}

Level.propTypes = {
  level: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
