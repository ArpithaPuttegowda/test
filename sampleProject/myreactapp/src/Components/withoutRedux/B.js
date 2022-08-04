import React, {createRef} from "react";

export const B = ({getLoc}) => {
  let locRef = createRef(null);
  const handleLoc = () => {
    let loc = locRef.current.value;
    getLoc(loc);
  };
  return (
    <div>
      <p>
        <input ref={locRef} />
        <button onClick={handleLoc}>Loc</button>
      </p>
    </div>
  );
};
