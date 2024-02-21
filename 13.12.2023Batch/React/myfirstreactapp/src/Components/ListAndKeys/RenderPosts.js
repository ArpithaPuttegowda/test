import React, { Fragment, useEffect, useState } from "react"

export const RenderPosts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json())
        .then((data)=>setPosts(data)).catch((failure)=>console.log(failure))
    },[])
  return (
    <div>{
        posts?.map((postObj,i)=>{
            const {id,userId,title}=postObj||{}
         return<Fragment key={id}>
            <b>UserId:</b>{userId}
            <p><b>Title:</b>{title}</p>
         </Fragment>
        })}</div>
  )
}
