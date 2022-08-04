import React, {useRef} from "react";

export const A = ({getData}) => {
  const nameRef = useRef();
  const handleName = () => {
    let name = nameRef.current.value;
    getData(name);
  };
  return (
    <div>
      <p>
        <input ref={nameRef} />
        <button onClick={handleName}>Name</button>
      </p>
    </div>
  );
};
