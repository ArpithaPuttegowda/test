import React, {useMemo, useState} from "react";

export const ExampleForUseMemo = () => {
  const [count, setCount] = useState(0);
  const handleIncCount = () => {
    setCount(count + 1);
  };

  //   const delay = useMemo(() => {
  //     for (let i = 0; i <= 5000000000; i++) {}
  //     return 10;
  //   }, []);

  return (
    <div>
      {/* <h1>Delay:::{delay}</h1> */}
      <button onClick={setCount(10)}>Inc count</button>
      <h1>Count:{count}</h1>
    </div>
  );
};
