import axios from "axios";
import { useMutation } from "react-query";

const InsertData = () => {
  let data = {};
  const {isError,isLoading,mutate,data:res}=useMutation(async()=>{
   let res=await axios.post("https://api.example.com/mutation-endpoint",data)
   return res.data
  },{
    onSuccess:(res)=>{
        console.log(res,"success")
    },
    onError:(res)=>{
     console.log(res,"failure")
    },
  })

  const handleSubmit = () => {
    mutate(data);
  };
  const handleChange = (event) => {
    let key = event.target.name;
    let val = event.target.value;
    data = { ...data, [key]: val };
  };
  if (isLoading) {
    return "Loading";
  }
  return (
    <div>
      <h1>Registration Form</h1>
      <p>
        <b>Name:</b>
        <input name="user-name" onChange={handleChange} />
      </p>
      <p>
        <b>Password:</b>
        <input name="pwd" type="password" onChange={handleChange} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      {res && "Inserted successfully"}
      {isError && "Something went wrong"}
    </div>
  );
};
export default InsertData;
