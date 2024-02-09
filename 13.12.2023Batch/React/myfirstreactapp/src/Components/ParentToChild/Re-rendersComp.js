import { useState } from "react";

export const ReRendersComp = () => {
  const [name, setName] = useState("Sachin");
  return (
    <div>

        <h1>I'm Parent:::{name} </h1>
      <button onClick={() => setName("Dhoni")}>Change Name</button>
      <Child myName={name} />
    </div>
  );
};

const Child = ({ myName }) => {
  const [count, setCount] = useState(0);
  return (
    <h1>
        I'm Child
      {alert("component rendered -child")}
      <button onClick={() => setCount(count + 1)}>inc Count..{count}</button>
      <h1>Data is coming parent::{myName}</h1>
    </h1>
  );
};
