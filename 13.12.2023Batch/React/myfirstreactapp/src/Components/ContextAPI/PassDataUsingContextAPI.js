import { createContext, useContext } from "react";

const ctx=createContext()//space
const ParentContextAPI = () => {
    const myState="Karnataka"
     return (
       <p>
         I'm Parent
         <ctx.Provider value={myState}>
         <A />
         </ctx.Provider>
       </p>
     );
   };
   
   const A = () => {
     return (
       <p>
         I'm A..
         <B />
       </p>
     );
   };
   
   const B = () => {
    const d=useContext(ctx)
     return (
       <p>
         I'm B...{d}
         <C />
       </p>
     );
   };
   
   const C = () => {
     return (
       <p>
         I'm C
         <D />
       </p>
     );
   };
   
   const D = () => {
     return (
       <p>
         I'm D
         <E  />
       </p>
     );
   };
   
   const E = () => {
    const data=useContext(ctx)
     return <p>I'm E::::{data}</p>;
   };
   
   export default ParentContextAPI;
   
  