import React, {useState} from "react";
import {connect} from "react-redux";

const ConnectFunction = ({d, myColor}) => {
  const [myClr, setMyClr] = useState("");
  const changeColor = () => {
    d({
      type: "COLOR",
      payload: "BLUE"
    });
  };
  const getColor = () => {
    setMyClr(myColor);
  };
  return (
    <div>
      <button onClick={changeColor}>To update color inside redux</button>
      <h1>
        <button onClick={getColor}>TO get the latest color</button>
      </h1>

      <h1>color....{myClr}</h1>
    </div>
  );
};
const msp = (state) => {
  return {
    myColor: state.colorReducer.color
  };
};
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};
export default connect(msp, mdp)(ConnectFunction);
