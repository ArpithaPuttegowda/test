import ChildComp from "./ChildComp";

const App=()=>{
    const data="Hyderabad"
    return <div>It's root component
        <ChildComp name={data}/>
        <ChildComp name="Mumbai"/>
    </div>
}

export default App;