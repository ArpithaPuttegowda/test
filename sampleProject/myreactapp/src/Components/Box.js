import "../App.css";

// const Box = (data) => {
//   console.log(data, "data");
//   return <div id="box">{data.n}</div>;
// };

const Box = ({n, loc, name}) => {
  return (
    <div id="box">
      {n}......{name}
    </div>
  );
};
export default Box;
