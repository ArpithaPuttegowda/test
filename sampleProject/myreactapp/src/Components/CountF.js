import React, {useState} from "react";

export const CountF = () => {
  const [state, setState] = useState(0);

  const incCount = () => {
    setState(state + 1);
  };
  return (
    <div>
      <button onClick={incCount}>Inc Count</button>
      <h1>{state}</h1>
    </div>
  );
};
