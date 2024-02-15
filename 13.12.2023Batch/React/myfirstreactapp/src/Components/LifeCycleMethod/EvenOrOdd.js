import { useEffect, useState } from "react"

export const CounterUpdating = () => {
  const [count,setCount]=useState(0)
  const [isEven,setIsEven]=useState(true)

  useEffect(()=>{
    setIsEven(count%2===0)
  },[count])

  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Inc count</button>
      <h1>{count}</h1>
      <h1>{isEven?"Even Number":"Odd Number"}</h1>
    </div>
  )
}
