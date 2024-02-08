import { useState } from "react";

export const ConditionalRendering = () => {
  const [isChild, setIsChild] = useState(false);
  const handleToggle = () => {
    setIsChild(!isChild);
  };
  return (
    <div>
      {isChild && <Child />}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

const Child = () => {
  return <p>I'm Child</p>;
};
