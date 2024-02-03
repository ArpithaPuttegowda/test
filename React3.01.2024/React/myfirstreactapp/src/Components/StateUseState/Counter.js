import { useState } from "react";

export const Counter = () => {
   const [c,setCount]=useState(0)//hook
    const handleIncCount=()=>{
       setCount(c+1)
    }
  return (
    <div>
        <button onClick={handleIncCount}>Inc Count ..{c}</button>
    </div>
  )
}
