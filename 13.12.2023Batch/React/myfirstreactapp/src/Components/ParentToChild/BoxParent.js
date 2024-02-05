import { Fragment } from "react";
import { Box } from "./Box";

export const BoxParent = () => {
  return (
    <Fragment>
      <div>
        <Box data="1" />
        <Box data="2"/>
        <Box data="3"/>
      </div>
      <div>
        <Box data="4"/>
        <Box data="5"/>
        <Box data="6" />
      </div>
      <div>
        <Box data="7"/>
        <Box data="8"/>
        <Box data="9"/>
      </div>
    </Fragment>
  );
};
