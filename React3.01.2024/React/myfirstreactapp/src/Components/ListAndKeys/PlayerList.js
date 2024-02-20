export const PlayerList = () => {
    const players=["Sachin","Dhoni","Kohli","Rahul","Sewag"]
  return (
    <>
    {
        players?.map((p,i)=>{
             return <h1>{p}</h1>
        })
    }
    </>
  )
}
