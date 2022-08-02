import React from "react";

export const ListKeysPlayer = () => {
  const playerObj = {
    name: "Sachin",
    loc: "Mumbai",
    runs: 10,
    FN: "ST"
  };
  let data = Object.values(playerObj);
  return (
    <div>
      <ol>
        {data.map((playerInfo, i) => {
          return <li key={playerInfo + i}>{playerInfo}</li>;
        })}
      </ol>
    </div>
  );
};
