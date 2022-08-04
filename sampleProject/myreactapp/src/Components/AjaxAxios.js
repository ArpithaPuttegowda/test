import React, {useState} from "react";
import {useSelector} from "react-redux";
import {List} from "./ReusableComponents/List";
import {WithoutJsx1} from "./withoutJsx";
import {A} from "./withoutRedux/A";
import {B} from "./withoutRedux/B";
import {C} from "./withoutRedux/C";

const AjaxAxios = () => {
  const n = useSelector((state) => state.reducer.name);
  const l = useSelector((state) => state.reducer.loc);
  const [myName, setMyName] = useState("");
  const [myLoc, setMyLoc] = useState("");

  const getData = (name) => {
    setMyName(name);
  };

  const getLoc = (loc) => {
    setMyLoc(loc);
  };
  return (
    <div>
      <h1>Data from REDUX</h1>
      <h1 style={{color: "royalblue"}}>{n}...name</h1>
      <h1 style={{color: "royalblue"}}>{l}...loc</h1>
      <List data={["KAELA", "ARPITHA"]} />
      <WithoutJsx1 />
      <h1>WITHOUT REDUX</h1>
      <A getData={getData} />
      <B getLoc={getLoc} />
      <C n={myName} l={myLoc} />
    </div>
  );
};
export default AjaxAxios;
