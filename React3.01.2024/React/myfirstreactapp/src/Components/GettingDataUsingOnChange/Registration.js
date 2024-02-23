export const Registration = () => {
    let data;

    const handleChange=(eve)=>{
    let value=eve.target.value;
    let id=eve.target.id;
    data={
        ...data,[id]:value
    }
    }
    const handleClick=()=>{
        console.log(data)

    }
  return (
    <>
      <p>
        <b>Name</b>
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        <b>Password</b>
        <input id="pwd" onChange={handleChange} type="password"/>
      </p>
      <p>
        <b>Email</b>
        <input  id="email" onChange={handleChange}/>
      </p>
      <button onClick={handleClick}>Registration</button>
    </>
  );
};
