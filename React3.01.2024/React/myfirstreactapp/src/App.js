import ChildComp from "./Components/ChildComp";
import "./App.css"
import {BoxParent} from "./Components/ParentToChild/BoxParent"
import { ParentComponent } from "./Components/ChildToParent/ParentComponent";
import { Counter } from "./Components/StateUseState/Counter";
import { ChangeName } from "./Components/StateUseState/ChangeName";
import { Parent } from "./Components/ContextAPI/PropDrilling";
import { ParentContextAPI } from "./Components/ContextAPI/ContextApi";

const App=()=>{
    // const data="Hyderabad"
    return <div>
        {/* <ChildComp name={data}/> */}
        {/* <ChildComp name="Mumbai"/> */}
        {/* <BoxParent/> */}
        {/* <ParentComponent/> */}
        {/* <Counter/> */}
        {/* <ChangeName/> */}
        {/* <Parent/> */}
        <ParentContextAPI/>
    </div>
}

export default App;