import React, { useState } from 'react'
import Menu from './Components/Routing'

export const App = () => {
  const [count,setCount]=useState(0)
  const [input,setInput]=useState("")
  const handleDec=()=>{
    setCount(count-Number(input))
  }
  const handleInc=()=>{
    setCount(count+Number(input))
  }
  return (
    <div>
      <h1 data-testid="heading">Counter</h1>
      <button data-testid="dec-btn" onClick={handleDec}>-</button>
      <input value={input} data-testid="input-data" onChange={(e)=>setInput(e.target.value)}/>
      <button data-testid="inc-btn" onClick={handleInc}>+</button>
      <p>
        <span data-testid="count-text">Count</span><br/>
        <b data-testid="count">{count}</b>
      </p>
      <Menu/>
    </div>
  )
}

