import React, {useRef} from "react";

export const TakingDataFUseRef = () => {
  let n1 = React.createRef();
  let n2 = useRef();
  const handleSum = () => {
    let n = n1.current.value;
    let m = n2.current.value;
    let sum = Number(n) + Number(m);
    console.log(sum);
  };
  return (
    <div>
      <p>
        <b>N1:</b>
        <input ref={n1} />
      </p>
      <p>
        <b>N2:</b>
        <input ref={n2} />
      </p>
      <p>
        <button onClick={handleSum}>Sum</button>
      </p>
    </div>
  );
};
