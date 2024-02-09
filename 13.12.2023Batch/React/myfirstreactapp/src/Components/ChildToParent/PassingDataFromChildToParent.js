export const Parent = () => {
  const getCity = (a) => {
    alert(a);
  };
  return (
    <>
      <h1>I'm Parent:::</h1>
      <Child data={getCity} />
    </>
  );
};

const Child = ({ data }) => {
  const city = "Delhi";
  const handleClick = () => {
    data(city);
  };
  return (
    <div>
      I'm Child:::
      <button onClick={handleClick}>Click me to send data to Parent</button>
    </div>
  );
};

