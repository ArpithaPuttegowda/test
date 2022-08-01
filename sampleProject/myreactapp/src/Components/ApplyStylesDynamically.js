import React, {useState} from "react";

export const ApplyStylesDynamically = () => {
  const [sum, setSum] = useState(0);
  const n1 = React.createRef(null);
  const n2 = React.createRef(null);
  const handleSum = () => {
    let NO1 = n1.current.value;
    let NO2 = n2.current.value;
    n1.current.value = "";
    n2.current.value = "";
    let mySum = Number(NO1) + Number(NO2);
    setSum(mySum);
  };
  return (
    <div>
      <div>
        <p>
          <b>N1:</b> <input ref={n1} type="number" />
        </p>
        <p>
          <b>N2:</b> <input ref={n2} type="number" />
        </p>
        <p>
          <button onClick={handleSum}>Sum</button>
        </p>
        <h1 style={{color: sum > 100 ? "red" : "blue"}}>Result:::{sum}</h1>
      </div>
    </div>
  );
};
