import { useEffect, useState } from "react";

export const GetPostUpdating = () => {
  const [count, setCount] = useState(0);
  const [name,setName]=useState("Sachin")
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((failure) => {
        console.log(failure, "failure");
      });
  },[name]);//componentDidupdate
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc count...{count}</button>

      <button onClick={()=>setName("Dhoni")}>Change Name...{name}</button>
    </div>
  );
};
