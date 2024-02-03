import { Fragment } from "react";
import { Box } from "./Box";

export const BoxParent = () => {
  return (
    <Fragment>
      <div>
        <Box data="1" text="one" />
        <Box data="2" text="two" />
        <Box data="3" text="three" />
      </div>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
      <div>
        <Box />
        <Box />
        <Box />
      </div>
    </Fragment>
  );
};
