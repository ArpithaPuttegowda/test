import React, { useEffect, useState } from 'react'

export const GetPost = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
           return res.json()
        }).then((data)=>setPosts(data)).catch((res)=>{console.log(res)})
    },[])
  return (
    <div>
        <h4>Posts</h4>
       {
        posts.length?posts.slice(0,2).map((obj,i)=>{
            return <h1 data-testid={i}>{obj.title}</h1>
        }):<h3 data-testid="dnf">Data not found</h3>
       }
    </div>
  )
}
