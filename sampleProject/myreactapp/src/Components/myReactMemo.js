import React, {memo, useState} from "react";

export const ExampleReactMemo = () => {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount(count + 1);
  };
  alert("parent called");
  return (
    <>
      <button onClick={handleInc}>Inc count{count}</button>
      <Child />
    </>
  );
};

const Child = memo(() => {
  alert("Child called");
  return <h2>I'm Child Component</h2>;
});
