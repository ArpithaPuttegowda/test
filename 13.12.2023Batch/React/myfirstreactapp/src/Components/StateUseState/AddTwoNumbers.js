import { useState } from "react";

export const AddTwoNumbers = () => {
    const [result,setResult]=useState(0)
    const handleSum=()=>{
        let n1=document.getElementById("n1").value;
        let n2=document.getElementById("n2").value;
        let output=Number(n1)+Number(n2)
      setResult(output)
    }
  return (
    <div>
        <p><b>No1:</b><input id="n1"/></p>
        <p><b>No2:</b><input id="n2"/></p>
        <button onClick={handleSum}>Sum</button>
        <h1>Result:{result}</h1>
    </div>
  )
}
