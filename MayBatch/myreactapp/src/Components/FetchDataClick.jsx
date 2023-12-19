import axios from 'axios'
import React, { useState } from 'react'
import { useQuery ,useQueryClient} from 'react-query'

export const FetchDataClick = () => {
    const queryClient=useQueryClient()
    const [isFetchPosts,setIsFetchPosts]=useState(false)
//  const {data,isLoading,isError}=useQuery("posts",async()=>{
//     let res=await fetch("https://jsonplaceholder.typicode.com/posts")
//     return res.json()
//  })
const {data,isLoading,isError,refetch}=useQuery("posts",async()=>{
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
 },{
    enabled:isFetchPosts
 })


 console.log(data,"data")
 if(isLoading){
    return <h1>Loading...</h1>
 }
 if(isError){
    return <h1>Something went wrong</h1>
 }
 const handlePosts=()=>{
  setIsFetchPosts(true)
 }
 const handleUpdateData=()=>{
//   refetch()
queryClient.invalidateQueries("posts")
 }
  return (
   <> <div>
    <button onClick={handlePosts}>Click to fetch Posts</button>
        <button onClick={handleUpdateData}>Update Data</button>{
        data?.data?.map((obj)=>{
          return <div>{obj.title}</div>
        })
        }</div>
        </>
  )
}
