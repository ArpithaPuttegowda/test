import { createContext, useContext } from "react";

const ctx = createContext(); //space
const playerListCtx = createContext();
const ParentMultipleContextAPI = () => {
  const sachinInfo = {
    name: "Sachin",
    place: "Mumbai",
    area: "RR layout",
  };
  const playersList = ["Sachin", "Dhoni", "Kohli"];

  return (
    <p>
      I'm Parent
      <playerListCtx.Provider value={playersList}>
        <ctx.Provider value={sachinInfo}>
          <A />
        </ctx.Provider>
      </playerListCtx.Provider>
    </p>
  );
};

const A = () => {
  return (
    <p>
      I'm A..
      <B />
    </p>
  );
};

const B = () => {
  return (
    <p>
      I'm B...
      <C />
    </p>
  );
};

const C = () => {
  const { name, place, area } = useContext(ctx);
  const [n1, n2, n3] = useContext(playerListCtx);
  return (
    <p>
      I'm C...{name}...{place}...{area}
      <h1>
        PlayerNames...{n1}...{n2}...{n3}
      </h1>
      <D />
    </p>
  );
};

const D = () => {
  return (
    <p>
      I'm D
      <E />
    </p>
  );
};

const E = () => {
  return <p>I'm E::::</p>;
};

export default ParentMultipleContextAPI;
