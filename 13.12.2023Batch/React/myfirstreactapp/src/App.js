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

const App = () => {
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
      <ParentContextAPI/>
    </div>
  );
};

export default App;

