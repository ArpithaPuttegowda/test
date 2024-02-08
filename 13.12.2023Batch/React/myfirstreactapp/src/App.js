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
      <ImmutableProp/>
    </div>
  );
};

export default App;

