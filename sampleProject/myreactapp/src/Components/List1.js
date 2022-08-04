import React from "react";

export const List1 = () => {
  const data = ["sachin", "DHONI", "kohli"];
  return (
    <div>
      <ol>
        {data.map((player, i) => {
          return <li key={player + i}>{player}</li>;
        })}
      </ol>
    </div>
  );
};
