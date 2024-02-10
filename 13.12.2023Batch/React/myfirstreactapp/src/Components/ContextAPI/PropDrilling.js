const ParentPropDrilling = () => {
 const myState="Karnataka"
  return (
    <p>
      I'm Parent
      <A data={myState}/>
    </p>
  );
};

const A = ({data}) => {
  return (
    <p>
      I'm A..
      <B myState={data}/>
    </p>
  );
};

const B = ({myState}) => {
  return (
    <p>
      I'm B
      <C myState={myState} />
    </p>
  );
};

const C = ({myState}) => {
  return (
    <p>
      I'm C
      <D data={myState}/>
    </p>
  );
};

const D = ({data}) => {
  return (
    <p>
      I'm D
      <E data={data} />
    </p>
  );
};

const E = ({data}) => {
  return <p>I'm E::::{data}</p>;
};

export default ParentPropDrilling ;
