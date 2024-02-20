export const RenderPlayers = () => {
    const data=["Sachin","Dhoni","Kohli"]
  return (
    <>
    {
        data?.map((player,i)=>{
            return <h1 key>{player}</h1>
        })
    }
    </>
  )
}
