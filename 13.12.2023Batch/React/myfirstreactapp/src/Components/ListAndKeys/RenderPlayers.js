export const RenderPlayers = () => {
    const data=["Raina","Pant","Sachin","Sewag","Dhoni","ST","Kohli","Dravid"]
  return (
    <>
    {
        data?.map((player,i)=>{
            return <p key={player+i}>{player}</p>
        })
    }
    </>
  )
}
