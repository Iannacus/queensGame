import { useState, useEffect } from "react";

const useTimer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return { timer: sec2min(count) };
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
