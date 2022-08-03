import React, {useEffect, useState} from "react";

export const LifeCycleForFunctionalComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("KAELA");
  //componentDidMount
  useEffect(() => {
    alert("componentDidMount");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    alert("componentDidUpdate for Name state");
  }, [name]);

  useEffect(() => {
    alert("componentDidUpdate for count state");
  }, [count]);

  useEffect(() => {
    alert("I'm componentDidUpdate");
  });

  const handleInc = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={handleInc}>Inc Count</button>
      <button onClick={() => setName("US")}>ChangeName</button>
      <h1>{name}</h1>
    </div>
  );
};
