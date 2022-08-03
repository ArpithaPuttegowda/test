import React, {useState} from "react";
import {useCount} from "./useCount";

export const HoverComp = () => {
  const [count, handleCount] = useCount();
  return (
    <div>
      <h1 onMouseOver={handleCount}>Inc Count{count}</h1>
    </div>
  );
};
