export const ParentCompo=()=>{
    return <>
    {/* <RenderColor/>
    <RenderCities/>
    <RenderFlowers/> */}
    <GenericOl data={["red","blue","yellow"]}/>
    <GenericOl data={["mumbai","Delhi","Kolkata"]}/>
    <GenericOl data={["lilly","jasmin","rose"]}/>
    </>
}

// const RenderColor = () => {
//   const color = ["Red", "blue"];
//   return (
//     <>
//       <ol>
//         {color.map((clr, i) => {
//           return <li key={clr + i}>{clr}</li>;
//         })}
//       </ol>
//     </>
//   );
// };

// const RenderFlowers = () => {
//   const flowers = ["Jasmin", "Lilly"];
//   return (
//     <>
//       <ol>
//         {flowers.map((flower, i) => {
//           return <li key={i}>{flower}</li>;
//         })}
//       </ol>
//     </>
//   );
// };

// const RenderCities = () => {
//   const cities = ["Mumbai", "Delhi"];
//   return (
//     <>
//       <ol>
//         {cities.map((city, i) => {
//           return <li key={i}>{city}</li>;
//         })}
//       </ol>
//     </>
//   );
// };


//reusuable or generic ul component

const GenericOl=({data})=>{
    return <ol>
       {
        data?.map((val,i)=>{
            return <li key={i}>{val}</li>
        })
       }
    </ol>
}
