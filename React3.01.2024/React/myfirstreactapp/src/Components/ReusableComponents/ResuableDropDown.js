import React from "react";

export const ResuableDropDown = () => {
    const cities = ["Mumbai", "Delhi", "Bangalore"];
    const colors = ["Red", "Blue", "Yellow"];
  return (
    <div>
      {/* <Cities />
      <Colors /> */}
      <p>
      <GenericDropdown data={cities}/>
      </p>
      <p>
      <GenericDropdown data={colors}/>
      </p>
    </div>
  );
};

// const Cities = () => {
//   const cities = ["Mumbai", "Delhi", "Bangalore"];
//   return (
//     <select>
//       {cities.map((city, i) => {
//         return <option key={i}>{city}</option>;
//       })}
//     </select>
//   );
// };

// const Colors = () => {
//   const colors = ["Red", "Blue", "Yellow"];
//   return (
//     <select>
//       {colors.map((clr, i) => {
//         return <option key={i}>{clr}</option>;
//       })}
//     </select>
//   );
// };

const GenericDropdown = ({ data }) => {
  return (
    <select>
      {data.map((v, i) => {
        return <option key={i}>{v}</option>;
      })}
    </select>
  );
};
