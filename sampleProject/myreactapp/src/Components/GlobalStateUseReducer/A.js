import React, {useContext, useRef} from "react";
import {ctx} from "./myctx";

export const A = () => {
  const stateParams = useContext(ctx);
  const nameRef = useRef(null);
  const handleName = () => {
    let name = nameRef.current.value;
    stateParams.dispatch({
      type: "NAME",
      payload: name
    });
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>NAME</button>
    </div>
  );
};
