export const GePosts = () => {
    const handleGetPost=()=>{
        // fetch("https://jsonplaceholder.typicod.com/users").then((res)=>res.json())
        // .then((data)=>{console.log(data)},(failure)=>{console.log(failure,"failure")})

        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json())
        .then((data)=>{console.log(data)})
        .catch((failure)=>{
          console.log(failure,"failure")
        })
    }
  return (
    <div>
        <button onClick={handleGetPost}>Get posts</button>
    </div>
  )
}
