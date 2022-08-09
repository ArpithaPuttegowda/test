import React, {useContext, useRef} from "react";
import {ctx} from "./myctx";

export const B = () => {
  const locRef = useRef(null);
  const storeParams = useContext(ctx);
  const handleLoc = () => {
    let loc = locRef.current.value;
    storeParams.dispatch({
      type: "LOC",
      payload: loc
    });
  };
  return (
    <div>
      <input ref={locRef} />
      <button onClick={handleLoc}>LOC</button>
    </div>
  );
};
