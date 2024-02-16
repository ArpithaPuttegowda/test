
import React, { useEffect, useState } from 'react'

export const Throttling = () => {
    let timer;
    const [isMobile,setIsMobile]=useState(window.innerWidth<768)
    const handleResize=()=>{
        console.log("called")
        setIsMobile(window.innerWidth<768)
       }
    useEffect(()=>{
       const throttling=()=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            handleResize()
        },300)
       }
       window.addEventListener("resize",throttling)
       return ()=>{
        window.removeEventListener("resize",throttling)
       }
    },[])
  return (
    <div>
        {
            isMobile ?<h1>It's mobile</h1>:<h1>It's not a mobile</h1>
        }
    </div>
  )
}
