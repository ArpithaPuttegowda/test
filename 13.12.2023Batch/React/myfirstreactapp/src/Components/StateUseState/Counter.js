import { useState } from "react";

export const Counter = () => {
  const [count,setCount]=useState(0)
  const handleInc = () => {
    setCount(count+1)
  };
  const handleDec=()=>{
    setCount(count-1)
  }
  const handleReset=()=>{
     setCount(0)
  }
  return (
    <p>
      <button onClick={handleInc}>Inc count</button>
      <button onClick={handleDec}>Dec Count</button>
      <button onClick={handleReset}>Reset</button>
      <h1>{count}</h1>
    </p>
  );
};

