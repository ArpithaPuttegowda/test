import React, {useState} from "react";
import axios from "axios";

export const AxiosAjax = () => {
  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const handleAjax = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setData(res.data))
      .catch((res) => {
        setData([]);
        setErrorMessage("SOMETHING WENT WRONG");
      });
  };
  return (
    <div>
      <button onClick={handleAjax}>Click me to fetch Data</button>
      {data.map((obj) => {
        return <h1 key={obj.id}>{obj.title}</h1>;
      })}
      <h1>{errorMessage}</h1>
    </div>
  );
};
