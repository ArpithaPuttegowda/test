import React, {useEffect, useState} from "react";

export const LifeCycleFunctionalComponentWillUnMount = () => {
  const [isChild, setIsChild] = useState(true);
  return (
    <div>
      {isChild && <Child />}
      <button onClick={() => setIsChild(!isChild)}>Toggle</button>
    </div>
  );
};

const Child = () => {
  let id;
  //componentDidMount
  useEffect(() => {
    id = setInterval(() => {
      console.log("US");
    }, 5000);
  }, []);

  //componentWillUnMount
  useEffect(() => {
    return () => {
      clearInterval(id);
    };
  }, []);

  return <div>I'm Child</div>;
};
