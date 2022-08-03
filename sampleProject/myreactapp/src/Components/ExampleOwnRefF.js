import {forwardRef, useRef} from "react";

const ExampleOwnRefF = () => {
  const myRef = useRef(null);
  const handleClick = () => {
    myRef.current.value = "KAELA";
  };
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <Child ref={myRef} name="US" />
    </div>
  );
};

const Child = forwardRef((props, r) => {
  return (
    <span>
      <input ref={r} />
      <h1>{props.name}</h1>
    </span>
  );
});

export default ExampleOwnRefF;
