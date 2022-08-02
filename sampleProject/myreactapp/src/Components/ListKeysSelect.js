import React from "react";

export const ListKeysSelect = () => {
  const countryList = ["INDIA", "US", "PAK", "CHINA", "UK"];
  return (
    <div>
      <select>
        {countryList.map((country, i) => {
          return <option key={country + i}>{country}</option>;
        })}
      </select>
    </div>
  );
};
