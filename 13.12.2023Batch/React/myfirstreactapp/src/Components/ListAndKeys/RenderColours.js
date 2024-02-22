
export const RenderColours = () => {
    const colours=["Red","Blue","Pink","Yellow","Orange","Voilet"]
  return (
    <>
     <ul>
       {
        colours?.map((clr,i)=><li key={clr+i}>{clr}</li>)
       }
     </ul>
    </>
  )
}
<li>Red</li>