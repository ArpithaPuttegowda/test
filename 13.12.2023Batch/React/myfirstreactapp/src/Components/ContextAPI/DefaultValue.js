import { createContext, useContext } from "react"
import "./defaultVal.css"

const nameCtx=createContext("Sachin")

const ParentContex2=()=>{
    return <>
        <h1 className="content">I'm Parent
            <Child1 />
        </h1>
    </>
}


const Child1=()=>{
   return <>
    <h1>I'm Child 1</h1>
    <Child2/>
   </> 
}

const Child2=()=>{
    const name=useContext(nameCtx)
    return <>
        <h1>I'm Child 2...{name}</h1>
    </>
}

export default ParentContex2;