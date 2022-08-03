import React from "react";
import {useCount} from "./useCount";

export const ButtonClick = () => {
  const [count, handleCount] = useCount();
  return (
    <div>
      <button onClick={handleCount}>Inc Count{count}</button>
    </div>
  );
};
