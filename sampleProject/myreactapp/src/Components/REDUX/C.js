import React from "react";
import {useSelector} from "react-redux";

export const C = () => {
  const name = useSelector((state) => state.reducer.name);
  const loc = useSelector((state) => state.reducer.loc);
  return (
    <div>
      <h1 style={{color: "Highlight"}}>NAME:{name}</h1>
      <h1 style={{color: "Highlight"}}>LOC:{loc}</h1>
    </div>
  );
};
