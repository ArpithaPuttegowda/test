import { useEffect, useState } from "react"
import { StyledComments } from "./styled"

export const RenderComments = () => {
    const [comments,setComments]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/comments")
        .then((res)=>res.json())
        .then((data)=>setComments(data))
        .catch((failure)=>console.log(failure))
    },[])

  return (
    <div>{
        comments?.slice(0,25)?.map((record,i)=>{
            const {email,id,name}=record || {}
            return <>
            <StyledComments key={id}>
                <div>{email}</div>
                <div>{name}</div>
            </StyledComments>
            </>
        })
        }</div>
  )
}
