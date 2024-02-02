import { BoxParent } from "./Components/BoxParent";
import ChildComp from "./Components/ChildComp";
import "./App.css"

const App=()=>{
    const data="Hyderabad"
    return <div>It's root component
        <ChildComp name={data}/>
        <ChildComp name="Mumbai"/>
        <BoxParent/>
    </div>
}

export default App;