import { useState } from "react";

export const ConditionalRenderingTernary = () => {
  const [isChild, setIsChild] = useState(false);
  const handleToggle = () => {
    setIsChild(!isChild);
  };
  return (
    <div>
      {isChild ? <Child />:<h1>Child component is not loaded</h1>}
      <button onClick={handleToggle}>Toggle</button>
    </div>
  );
};

const Child = () => {
  return <p>I'm Child</p>;
};
