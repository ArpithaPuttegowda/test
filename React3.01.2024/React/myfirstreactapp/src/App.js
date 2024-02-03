import ChildComp from "./Components/ChildComp";
import "./App.css"
import {BoxParent} from "./Components/ParentToChild/BoxParent"
import { ParentComponent } from "./Components/ChildToParent/ParentComponent";
import { Counter } from "./Components/StateUseState/Counter";

const App=()=>{
    // const data="Hyderabad"
    return <div>
        {/* <ChildComp name={data}/> */}
        {/* <ChildComp name="Mumbai"/> */}
        {/* <BoxParent/> */}
        {/* <ParentComponent/> */}
        <Counter/>
    </div>
}

export default App;