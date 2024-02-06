import { useRef, useState } from "react";

export const PrintName = () => {
  const nameRef = useRef(null);
  const [name,setName]=useState("")

  const handleClick = () => {
    //    let name= document.getElementById("my-name").value;
    const myName = nameRef?.current?.value;
    nameRef.current.value="";
    setName(myName)
  };
  return (
    <>
      <input ref={nameRef}/>
      <button onClick={handleClick}>Print Name</button>
      <h1>My Name:::{name}</h1>
    </>
  );
};
