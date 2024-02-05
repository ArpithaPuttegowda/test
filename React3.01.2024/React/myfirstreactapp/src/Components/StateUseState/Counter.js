import { useState } from "react";

export const Counter = () => {
 const [count,setCount]=useState(0)
    const handleIncCount=()=>{
       setCount(1000)
    }
  return (
    <div>
        <button onClick={handleIncCount}>Inc Count ..{count}</button>
    </div>
  )
}
