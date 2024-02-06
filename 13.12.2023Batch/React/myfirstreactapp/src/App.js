import PlayerName from "./Components/Child";
import {BoxParent} from "./Components/ParentToChild/BoxParent"
import "./App.css"
import { Players } from "./Components/ParentToChild/Players";
import { Counter } from "./Components/StateUseState/Counter";
import { ChangeName } from "./Components/StateUseState/ChangeName";
import { AddTwoNumbers } from "./Components/StateUseState/AddTwoNumbers";

const App = () => {
  const loc = "Maharastra";
  const runs=200
  return (
    <div>
      <h1>App component</h1>
      {/* <PlayerName myLoc={loc} r={runs} /> */}
      {/* <BoxParent/> */}
      {/* <Players/> */}
      {/* <Counter/> */}
      {/* <ChangeName/> */}
      <AddTwoNumbers/>
    </div>
  );
};

export default App;

