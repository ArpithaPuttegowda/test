import React, {useContext} from "react";
import {ctx} from "./myctx";

export const C = () => {
  const storeParams = useContext(ctx);
  return (
    <div>
      <h1>NAME:{storeParams.state.name}</h1>
      <h1>LOC:{storeParams.state.loc}</h1>
    </div>
  );
};
