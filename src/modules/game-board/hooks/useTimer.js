import { useState, useEffect, useRef } from "react";

const useTimer = () => {
  const [count, setCount] = useState(0);
  const [gameInterval, setGameInterval] = useState(true);
  const interval = useRef(null);

  useEffect(() => {
    if (!gameInterval) return;
    if (interval.current) clearInterval(interval.current);

    interval.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval.current);
  }, [count, gameInterval]);

  const stopInterval = () => {
    clearInterval(interval);
    setGameInterval(false);
  };

  return { timer: sec2min(count), stopInterval };
};

export default useTimer;

const sec2min = (sec = 0) => {
  const min = Math.trunc(sec / 60);
  const seconds = sec % 60;

  return `${format(min)} : ${format(seconds)}`;
};

const format = (value) => {
  if (value > 9) return value;

  return `0${value}`;
};
