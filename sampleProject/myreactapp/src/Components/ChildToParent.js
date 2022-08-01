import React from "react";

export const ChildToParent = ({fn}) => {
  const myData = "US";
  const handleClick = () => {
    fn(myData);
  };
  return (
    <div>
      <button onClick={handleClick}>
        Click me to send data from Child to parent
      </button>
    </div>
  );
};
