import { useState } from "react"

const ButtonParent=()=>{
    const [name,setName]=useState("Sachin")
    const handleConsoleMessage=()=>{
        console.log("console message")
    }
    const handleAlertMessage=()=>{
        alert("alert message")
    }
    const handleChangeName=()=>{
        setName("Dhoni")
    }
    return <>
        <Button className="btn1" children="Show console message" onClick={handleConsoleMessage}/>
        <Button className="btn2" children="Show Alert Message" onClick={handleAlertMessage}/>
        <Button children="Change Name" onClick={handleChangeName}/>
        <h1>{name}</h1>
    </>
}

export default ButtonParent;


const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

