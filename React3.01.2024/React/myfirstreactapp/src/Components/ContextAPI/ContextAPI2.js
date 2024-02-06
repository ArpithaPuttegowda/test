import { createContext, useContext } from "react";

//create context
const ctx = createContext();
const ctxFav = createContext();

export const ParentContext2 = () => {
  const data = {
    name: "sachin",
    loc: "Mumbai",
  };
  const myFavourites = ["blue", "jasmin", "saree"];
  return (
    <div>
      I'm Parent
      <ctxFav.Provider value={myFavourites}>
        <ctx.Provider value={data}>
          <A />
        </ctx.Provider>
      </ctxFav.Provider>
    </div>
  );
};

const A = () => {
  const [clr, flr, dress] = useContext(ctxFav);
  return (
    <div>
      I'm A... myFavourites..{clr}...{flr}....{dress}
      <B />
    </div>
  );
};

const B = () => {
  const { name, loc } = useContext(ctx);
  return (
    <div>
      I'm B... I'm {name},I'm {loc}
    </div>
  );
};
