import { useRef, useState } from "react";

export const AddTwoNumbers = () => {
  const n1Ref = useRef(null);
  const n2Ref=useRef(null);
  const [result, setResult] = useState(0);
  const handleSum = () => {
    // let n1=document.getElementById("n1").value;
    // let n2=document.getElementById("n2").value;
    // document.getElementById("n1").value="";
    // document.getElementById("n2").value="";
    const n1=n1Ref?.current?.value;
    const n2=n2Ref?.current?.value;
    if(n1&&n2){
      n1Ref.current.value="";
      n2Ref.current.value=""
    }
    const sum=Number(n1)+Number(n2);
    setResult(sum)
  };
  return (
    <div>
      <p>
        <b>No1:</b>
        <input ref={n1Ref} />
      </p>
      <p>
        <b>No2:</b>
        <input ref={n2Ref}  />
      </p>
      <button onClick={handleSum}>Sum</button>
      <h1 style={{color:result>100?"green":"red"}}>Result:{result}</h1>
      <h1 class={result>100?"cb":"cr"}>Result:{result}</h1>
    </div>
  );
};
