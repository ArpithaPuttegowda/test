import { useEffect, useState } from "react";

export const GetPostMounting = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((failure) => {
        console.log(failure, "failure");
      });
  }, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc count...{count}</button>
    </div>
  );
};
