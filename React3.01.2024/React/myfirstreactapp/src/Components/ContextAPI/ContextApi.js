import { useContext } from "react";
import { createContext } from "react";

const ctx = createContext();
export const ParentContextAPI = () => {
  const myCountry = "Pakistan";
  return (
    <div>
      I'm Parent
      <ctx.Provider value={myCountry}>
        <A />
      </ctx.Provider>
    </div>
  );
};

const A = () => {
  return (
    <div>
      I'm A...
      <B />
    </div>
  );
};

const B = () => {
    const country=useContext(ctx)
  return (
    <div>
      I'm B...{country}
      <C />
    </div>
  );
};

const C = () => {
  return (
    <div>
      I'm C
      <D />
    </div>
  );
};

const D = () => {
  return (
    <div>
      I'm D
      <E />
    </div>
  );
};

const E = () => {
    const country=useContext(ctx)
  return <div>I'm E:::::::{country}</div>;
};
