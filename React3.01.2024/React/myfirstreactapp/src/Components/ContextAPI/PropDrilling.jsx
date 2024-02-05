export const Parent = () => {
 const myCountry="India"
  return (
    <div>
      I'm Parent
      <A myData={myCountry}/>
    </div>
  );
};

const A = ({myData}) => {
  return (
    <div>
      I'm A...
      <B  data={myData}/>
    </div>
  );
};

const B = ({data}) => {
  return (
    <div>
      I'm B
      <C d={data}/>
    </div>
  );
};

const C = ({d}) => {
  return (
    <div>
      I'm C
      <D myCountry={d}/>
    </div>
  );
};

const D = ({myCountry}) => {
  return (
    <div>
      I'm D
      <E myCountry={myCountry}/>
    </div>
  );
};

const E = ({myCountry}) => {
  return <div>I'm E:::::::{myCountry}</div>;
};


 