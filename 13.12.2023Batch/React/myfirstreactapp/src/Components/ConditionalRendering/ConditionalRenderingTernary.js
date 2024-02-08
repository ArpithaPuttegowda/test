import { useState } from "react"

export const ParentConditionalTO = () => {
    const [isChild,setIsChild]=useState(false)
    const handleToggle=()=>{
       setIsChild(!isChild)
    }
    // let renderChild;
    // if(isChild){
    //     renderChild=<Child/>
    // }
    // else{
    //     renderChild=<h1>Child got unmounted.....</h1>
    // }
  return (
    <div>
     {
        isChild?<Child/>:<h1>Child got unmounted</h1>
     }
        <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}


const Child=()=>{
    return <p>I'm child Component</p>
}
