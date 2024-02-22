import ChildComp from "./Components/ChildComp";
import "./App.css"
import {BoxParent} from "./Components/ParentToChild/BoxParent"
import { ParentComponent } from "./Components/ChildToParent/ParentComponent";
import { Counter } from "./Components/StateUseState/Counter";
import { ChangeName } from "./Components/StateUseState/ChangeName";
import { Parent } from "./Components/ContextAPI/PropDrilling";
import { ParentContextAPI } from "./Components/ContextAPI/ContextApi";
import { ParentContext2 } from "./Components/ContextAPI/ContextAPI2";
import { HerosParent } from "./Components/ChidrenPredefined/HerosParent";
import { PrintName } from "./Components/TakingData/PrintName";
import { ConditionalRendering } from "./Components/ConditionalRendering/ConditionalRendering";
import { ConditionalRenderingTernary } from "./Components/ConditionalRendering/ConditionalRenderingTernary";
import { SampleApp } from "./Components/ModuleCSS/SampleApp";
import { ButtonComp } from "./Components/StyledComponents/ButtonComp";
import { PlayerList } from "./Components/ListAndKeys/PlayerList";
import { RenderColours } from "./Components/ListAndKeys/RenderColours";
import { RenderFlowers } from "./Components/ListAndKeys/RenderFlowers";
import MyComponent from "./Components/ListAndKeys/RenderData";
import MyReversComp from "./Components/ListAndKeys/ReverseTheList";
import { Products } from "./Components/ListAndKeys/Products";
import { RenderTableData } from "./Components/ListAndKeys/RenderTableData";
import { ParentCompo } from "./Components/ReusableComponents/ReusableOrderedList";

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
        {/* <ParentContextAPI/> */}
        {/* <ParentContext2/> */}
        {/* <HerosParent/> */}
        {/* <PrintName/> */}
        {/* <ConditionalRendering/> */}
        {/* <ConditionalRenderingTernary/> */}
        {/* <SampleApp/> */}
        {/* <ButtonComp/> */}
        {/* <PlayerList/>
        <RenderColours/>
        <RenderFlowers/>
        <MyComponent/>
        <MyReversComp/>
        <Products/> */}
        {/* <RenderTableData/> */}
        <ParentCompo/>
    </div>
}

export default App;