import {useReducer} from "react";

const initData = {
  count1: 10,
  count5: 10
};

const reducer = (state, action) => {
  if (action === "INC1") {
    state = {...state, count1: state.count1 + 1};
  }
  if (action === 5) {
    state = {...state, count5: state.count5 + 5};
  }
  return state;
};
const ExampleUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initData);
  const handleInc1 = () => {
    dispatch("INC1");
  };
  const handleInc5 = () => {
    dispatch(5);
  };
  return (
    <div>
      <button onClick={handleInc1}>Inc1</button>
      <button onClick={handleInc5}>Inc5</button>
      <h1>INC1:{state.count1}</h1>
      <h1>INC5:{state.count5}</h1>
    </div>
  );
};

export default ExampleUseReducer;
