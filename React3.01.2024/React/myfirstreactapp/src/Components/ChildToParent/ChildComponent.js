export const ChildComponent = ({ fn,gN }) => {
  const pinCode = 222;
  const name = "Lakshmi";
  const handleClick = () => {
    fn(pinCode);
  };

  const handleSendText=()=>{
   gN(name)
  }
  return (
    <>
      <div>ChildComponent</div>
      <p>
        <button onClick={handleClick}>
          Click me to give pinCode to Parent
        </button>
      </p>
      <button onClick={handleSendText}>Click me to send Text Lakshmi to Parent component</button>
    </>
  );
};
