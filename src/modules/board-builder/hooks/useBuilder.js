import { useEffect, useState } from "react";

import defaultBoard from "../../../boards/defaultBoard";

import { boards } from "../../../boards/hard";

export default function useBuilder() {
  const [board, setBoard] = useState(defaultBoard);
  const [color, setColor] = useState("purple");
  const [size, setSize] = useState(5);

  const changeColor = (color) => {
    setColor(color);
  };

  const changeSize = (size) => {
    setSize(size);
  };

  const updateBoard = (newBoard) => {
    setBoard(newBoard);
  };

  const addBoard = (newBoard) => {
    console.log(newBoard);
    boards.push(newBoard);
  };

  useEffect(() => {
    setBoard(generateBoard(size, "grey"));
  }, [size]);

  return {
    board,
    color,
    changeColor,
    changeSize,
    updateBoard,
    addBoard,
  };
}

function generateBoard(size, color) {
  const board = [];

  for (let i = 0; i < size; i++) {
    const row = [];

    for (let j = 0; j < size; j++) {
      row.push({ color, blocked: false });
    }

    board.push(row);
  }

  return board;
}
