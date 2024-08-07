import React from "react";
import { useNavigate } from "react-router-dom";

import Level from "../components/Level";

import { boards } from "../../../boards/hard";

export default function Levels() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen gap-4 bg-slate-950">
      {boards.map((_, i) => {
        return (
          <Level
            level={i + 1}
            onClick={() => {
              navigate(`/board/${i + 1}`);
            }}
          />
        );
      })}
    </div>
  );
}
