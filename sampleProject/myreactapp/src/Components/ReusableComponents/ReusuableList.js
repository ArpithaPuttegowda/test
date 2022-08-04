import React from "react";
import {List1} from "../List1";
import {List2} from "../List2";
import {List} from "./List";
import ReusalbeTable from "./ReusalbeTable";

const ReusuableList = () => {
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
    </div>
  );
};

export default ReusuableList;
