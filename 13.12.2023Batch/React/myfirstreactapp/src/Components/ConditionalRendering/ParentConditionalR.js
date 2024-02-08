import { useState } from "react"

export const ParentConditionalR = () => {
    const [isChild,setIsChild]=useState(false)
    const handleToggle=()=>{
       setIsChild(!isChild)
    }
  return (
    <div>Parent
        {
            isChild && <ChildCR/>
        }
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}


const ChildCR=()=>{
    return <p>I'm child Component</p>
}
