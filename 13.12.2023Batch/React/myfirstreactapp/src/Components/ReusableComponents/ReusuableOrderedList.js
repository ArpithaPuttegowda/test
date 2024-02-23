export const ReusuableOrderedList = () => {
  return <div>
    {/* <RenderCities/>
    <RenderColors/>
    <RenderFlowers/> */}
    <GenericOL data={["Rose", "Lilly"]}/>
    <GenericOL data={["Red","blue"]}/>
    <GenericOL data={["Coco","hocky","volleyball"]}/>
  </div>;
};

// const RenderFlowers = () => {
//   const flowers = ["Rose", "Lilly"];
//   return (
//     <ol>
//       {flowers?.map((flower, i) => {
//         return <li key={i}>{flower}</li>;
//       })}
//     </ol>
//   );
// };

// const RenderColors = () => {
//     const colors = ["Red", "Blue","Yellow"];
//     return (
//       <ol>
//         {colors?.map((clr, i) => {
//           return <li key={i}>{clr}</li>;
//         })}
//       </ol>
//     );
//   };

//   const RenderCities = () => {
//     const cities = ["Mumbai", "Delhi","Kolkata"];
//     return (
//       <ol>
//         {cities?.map((city, i) => {
//           return <li key={i}>{city}</li>;
//         })}
//       </ol>
//     );
//   };


  const GenericOL=({data})=>{
    return <ol>
        {
            data?.map((v,i)=>{
                return <li key={i}>{v}</li>
            })
        }
    </ol>
  }