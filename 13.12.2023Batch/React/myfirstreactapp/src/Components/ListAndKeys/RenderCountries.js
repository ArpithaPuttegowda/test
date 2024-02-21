export const RenderCountries = () => {
    const countries=["India","US","UK","Dubai","Srilanka"]
  return (
        <select>
            {
                countries?.map((c,i)=>{
                 return <option key={c+i}>{c}</option>
                })
            }
        </select>
  )
}
