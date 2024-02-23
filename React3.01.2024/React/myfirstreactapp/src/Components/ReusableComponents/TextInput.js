import { useState } from "react";

const TextInput = ({ value, onChange, placeholder,type,name }) => {
  return (
    <input 
      type={type}
      value={value} 
      onChange={onChange} 
      placeholder={placeholder} 
      name={name}
    />
  );
};


const ResuableTextInput=()=>{
  const [data,setData]=useState({
    name:"",
    password:"",
    email:""
  })

  const handleChange=(eve)=>{
       setData({
        ...data,[eve.target.name]:eve.target.value
       })
  }
  const handleRegistration=()=>{
    console.log(data)
  }
    return<>
    <TextInput value={data.name} onChange={handleChange} placeholder="Name" name="name"/>
    <TextInput value={data.password} onChange={handleChange} placeholder="Password" name="password"/>
    <TextInput value={data.email} onChange={handleChange} placeholder="Email" name="email"/>
    <button onClick={handleRegistration}>Registration</button>
    </>
}


export default ResuableTextInput