import { useState } from "react"

export const ReverseData = () => {
    const [lists,setLists]=useState(["Orange","Red","Blue"])
    const handleReverse=()=>{
        setLists([...lists.reverse()])
    }
  return (<>
    <ol>
        {
            lists?.map((l,i)=>{
                return<li key={i}>{l}</li>
            })
        }
    </ol>
    <button onClick={handleReverse}>Reverse</button>
    </>
  )
}
