import React from "react";

export const ListKeysTable = () => {
  let headers = ["Name", "LOCATION", "RUNS", "CLR"];
  let data = [
    {name: "Sachin", loc: "mumbai", runs: 10, clr: "Red"},
    {name: "DHoni", loc: "ranchi", runs: 10, clr: "blue"}
  ];
  let keys = ["name", "loc", "runs", "clr"];
  return (
    <div>
      <table border="1px solid">
        <thead>
          <tr>
            {headers.map((header, i) => {
              return <th key={header + i}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, i) => {
            return (
              <tr key={i}>
                {keys.map((key, i) => {
                  return <td key={i}>{obj[key]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
