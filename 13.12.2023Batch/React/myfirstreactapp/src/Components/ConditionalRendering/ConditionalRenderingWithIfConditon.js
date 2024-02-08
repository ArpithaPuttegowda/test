export const ParentCRIf = () => {
  const [isChild, setIsChild] = useState(false);
  const handleToggle = () => {
    setIsChild(!isChild);
  };
  let renderChild;
  if(isChild){
    renderChild=<ChildCR/>
}
  return (
    <div>
      Parent
      <button onClick={handleToggle}>Toggle</button>
       {renderChild} 
    </div>
  );
};

const ChildCR = () => {
  return <p>I'm child Component</p>;
};
