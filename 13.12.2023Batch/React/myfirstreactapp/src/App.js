import PlayerName from "./Components/Child";
import {BoxParent} from "./Components/ParentToChild/BoxParent"
import "./App.css"
import { Players } from "./Components/ParentToChild/Players";
import { Counter } from "./Components/StateUseState/Counter";
import { ChangeName } from "./Components/StateUseState/ChangeName";
import { AddTwoNumbers } from "./Components/StateUseState/AddTwoNumbers";
import { GetData } from "./Components/StateUseState/GetData";
import { ParentConditionalR } from "./Components/ConditionalRendering/ParentConditionalR";
import { ParentConditionalTO } from "./Components/ConditionalRendering/ConditionalRenderingTernary";
import { ImmutableProp } from "./Components/DifferencesBetweenStateAndProps/ImmutableProp";
import { ReRendersComp } from "./Components/ParentToChild/Re-rendersComp";
import { Parent } from "./Components/ChildToParent/PassingDataFromChildToParent";
import { ParentComp } from "./Components/ChildToParent/PassingCtoP";
import ParentComponent from "./Components/ChildToParent/PassingDataFromCtoP2";
import ParentPropDrilling from "./Components/ContextAPI/PropDrilling";
import ParentContextAPI from "./Components/ContextAPI/PassDataUsingContextAPI";
import ParentMultipleContextAPI from "./Components/ContextAPI/CreatingMultipleContext";
import ParentContex2 from "./Components/ContextAPI/DefaultValue";
import ThemeComp from "./Components/ContextAPI/ThemeContext";
import { GePosts } from "./Components/LifeCycleMethod/GetPosts";
import { GetPostMounting } from "./Components/LifeCycleMethod/GetPostMounting";
import { GetPostUpdating } from "./Components/LifeCycleMethod/GetPostUpdating";
import UserData from "./Components/LifeCycleMethod/UpdatingPhase2";
import { CounterUpdating } from "./Components/LifeCycleMethod/EvenOrOdd";
import { ToggleTheChild } from "./Components/LifeCycleMethod/Unmounting/Unmounting1";
import { useState } from "react";
import { Unmounting2 } from "./Components/LifeCycleMethod/Unmounting/Unmounting2";

const App = () => {
  const [isLoad,setIsLoad]=useState(true)
  const loc = "Maharastra";
  const runs=200
  return (
    <div>
      {/* <PlayerName myLoc={loc} r={runs} /> */}
      {/* <BoxParent/> */}
      {/* <Players/> */}
      {/* <Counter/> */}
      {/* <ChangeName/> */}
      {/* <AddTwoNumbers/> */}
      {/* <GetData/> */}
      {/* <ParentConditionalR/> */}
      {/* <ParentConditionalTO/> */}
      {/* <ImmutableProp/> */}
      {/* <ReRendersComp/> */}
      {/* <Parent/> */}
      {/* <ParentComp/> */}
      {/* <ParentComponent/> */}
      {/* <ParentPropDrilling/> */}
      {/* <ParentContextAPI/> */}
      {/* <ParentMultipleContextAPI/> */}
      {/* <ParentContex2 /> */}
      {/* <ThemeComp/> */}
      {/* <GePosts/> */}
      {/* <GetPostMounting/> */}
      {/* <GetPostUpdating/> */}
      {/* <UserData userId={5}/> */}
      {/* <CounterUpdating/> */}
       {/* <ToggleTheChild/> */}
      {isLoad && <Unmounting2/>} 
      <button onClick={()=>setIsLoad(!isLoad)}>click me</button>
    </div>
  );
};

export default App;

