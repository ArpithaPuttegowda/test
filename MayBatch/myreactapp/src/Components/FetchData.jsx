import axios from 'axios'
import React, { useEffect } from 'react'
import { useQuery } from 'react-query'

export const FetchData = () => {
   useEffect(()=>{
fetch("https://jsonplacehlder.typicode.com/posts").then((res)=>console.log(res,"response of posts"))
   },[])
//  const {data,isLoading,isError}=useQuery("posts",async()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json()
//  })
const {data,isLoading,isError}=useQuery("posts",async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
 })
 console.log(data,"data")
 if(isLoading){
    return <h1>Loading...</h1>
 }
 if(isError){
    return <h1>Something went wrong</h1>
 }
  return (
    <div>{
        data?.data?.map((obj)=>{
          return <div>{obj.title}</div>
        })
        }</div>
  )
}
