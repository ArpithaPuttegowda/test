import { useState } from "react";

const ParentComponent = () => {
  const [dataFromChild,setDataFromChild]=useState("")
  const getDataFromChild = (myData) => {
  setDataFromChild(myData)
  };
  return (
    <h1>
      Data from Child:::{dataFromChild}
      <ChildComponent getData={getDataFromChild} />
    </h1>
  );
};

const ChildComponent = ({ getData }) => {
  const data = "Mumbai";
  const onSendDataToParent = () => {
    getData(data);
  };
  return (
    <p>
      <button onClick={onSendDataToParent}>Send Data to Parent</button>
    </p>
  );
};

export default ParentComponent;
