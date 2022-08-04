import React from "react";

export const List = ({data}) => {
  return (
    <ol>
      {data?.map((item, i) => {
        return <li key={i}>{item}</li>;
      })}
    </ol>
  );
};
