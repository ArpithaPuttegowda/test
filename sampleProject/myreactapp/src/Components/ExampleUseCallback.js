import React, {memo, useCallback, useState} from "react";

export const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);
  const getData = useCallback(() => {}, []);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Inc Count</button>
      <h1>{count}</h1>
      <Child fn={getData} />
    </div>
  );
};

const Child = memo(({fn}) => {
  return <div>I'm CHILD</div>;
});
