import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {setName} from "../../Reducers/mySlice";

export const A = () => {
  const nameRef = useRef(null);
  const dispatch = useDispatch();
  const handleName = () => {
    let name = nameRef.current.value;
    dispatch(setName(name));
  };
  return (
    <div>
      <input ref={nameRef} />
      <button onClick={handleName}>NAME</button>
    </div>
  );
};
