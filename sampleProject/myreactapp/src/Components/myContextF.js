import {useContext} from "react";
import {ctx} from "./context/context";

const A = () => {
  const data = "US";
  return (
    <>
      <h2>I'm A component</h2>
      <ctx.Provider value={data}>
        <B />
      </ctx.Provider>
    </>
  );
};

const B = () => {
  return (
    <>
      <h1>I'm B component</h1>
      <C />
    </>
  );
};
const C = () => {
  let data = useContext(ctx);
  return (
    <>
      <h1>I'm C component...{data}</h1>
      <D />
    </>
  );
};
const D = () => {
  return (
    <>
      <h1>I'm D...Component</h1>
      <ctx.Consumer>{(data) => data}</ctx.Consumer>
    </>
  );
};
export default A;
