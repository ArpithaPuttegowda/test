import { useState } from "react";

export const ChangeName = () => {
    const [name,setName]=useState("Sachin")
    const handleChangeName=()=>{
        setName("Dhoni")
    }
  return (
    <div>
     <button onClick={handleChangeName}>ChangeName...{name}</button>
    </div>
  )
}
