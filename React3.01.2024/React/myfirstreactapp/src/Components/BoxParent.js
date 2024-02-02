import { Fragment } from "react";
import { Box } from "./Box";

export const BoxParent = () => {
  return (
    <Fragment>
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
      <div>
        <Box />
        <Box />
        <Box />
      </div>
    </Fragment>
  );
};
