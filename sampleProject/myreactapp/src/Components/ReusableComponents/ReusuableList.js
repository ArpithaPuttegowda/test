import React, {useState} from "react";
import {List1} from "../List1";
import {List2} from "../List2";
import {List} from "./List";
import ReusalbeTable from "./ReusalbeTable";
import myStore from "../../store/store";

const ReusuableList = () => {
  const [name, setName] = useState("");
  const [loc, setLoc] = useState("");
  const state = myStore.getState();
  const handleData = () => {
    setName(state.reducerC.name);
    setLoc(state.reducerC.loc);
  };
  return (
    <div>
      {/* <List1 />
      <List2 /> */}
      <List data={["sachin", "DHONI", "kohli"]} />
      <List data={["rose", "lilly", "hibscus"]} />
      <p>
        {" "}
        <ReusalbeTable
          headers={["NAME", "LOC"]}
          data={[
            {name: "Sachin", loc: "mumbai"},
            {name: "Dhoni", loc: "ranchi"}
          ]}
          keys={["name", "loc"]}
        />
      </p>
      <h1>
        <ReusalbeTable
          headers={["Colors", "Sweets"]}
          data={[
            {color: "red", sweet: "jamun"},
            {color: "white", sweet: "kajuburfi"}
          ]}
          keys={["color", "sweet"]}
        />
      </h1>
      <button onClick={handleData}>CLICK ME TO GET REDUX State</button>
      <h1>NAME:{name}</h1>
      <h1>LOC:{loc}</h1>
    </div>
  );
};

export default ReusuableList;
