import React from 'react'

export const RenderColours = () => {
    const clrs=["Red","Blue","Orange","Pink","Voilet"]
  return (
    <ol>
       {
        clrs.map((clr,i)=><li key={clr+i}>{clr}</li>)
       }
    </ol>
  )
}
