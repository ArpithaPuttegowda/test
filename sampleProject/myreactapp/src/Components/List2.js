import React from "react";

export const List2 = () => {
  const data = ["rose", "lilly", "hibscus"];
  return (
    <div>
      <ol>
        {data.map((flower, i) => {
          return <li key={flower + i}>{flower}</li>;
        })}
      </ol>
    </div>
  );
};
