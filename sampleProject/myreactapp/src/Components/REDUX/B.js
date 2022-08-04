import React, {useRef} from "react";
import myStore from "../../store/store";

export const B = () => {
  const locRef = useRef(null);

  const handleLoc = () => {
    let loc = locRef.current.value;
    myStore.dispatch({
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
