import React from 'react'

export const RenderFlowers = () => {
    const flowers=["Rose","Lilly"]
  return (
    <ul>
       {
        flowers?.map((flower,i)=><li key={flower+i}>{flower}</li>)
       }
    </ul>
  )
}
