import React, { useEffect } from 'react'
import { useState } from 'react'

export const ToggleTheChild= () => {
    const [isChild,setIsChild]=useState(true)
  return (
    <div>
        {isChild && <Child/>}
        <button onClick={()=>setIsChild(!isChild)}>ToggleChild</button>
    </div>
  )
}

const Child=()=>{
    useEffect(()=>{
        //fetching data from backend
      let id=setInterval(()=>{
            console.log("this is setInterval")
        },1000)
        return ()=>{
             clearInterval(id)
        }
    },[])//unmouting phase

    return <p>
        I'm Child component
    </p>
}
