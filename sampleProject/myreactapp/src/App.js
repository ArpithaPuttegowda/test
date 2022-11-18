// import React, {useState, Component, PureComponent, useReducer} from "react";
// import {ApplyStylesDynamically} from "./Components/ApplyStylesDynamically";
// import ArithMetic from "./Components/ArithMetic";
// function App() {
//   return (
//     <div>
//       <div>Hellow world</div>
//       <div>US</div>
//       <div>Hellow world</div>
//       <div>US</div> <div>Hellow world</div>
//       <div>US</div>
//     </div>
//   );
// }
// export default App;
// import Box from "./Components/Box";
// import BoxC from "./Components/BoxC";
// import {ChildToParent} from "./Components/ChildToParent";
// import ChildTOParentC from "./Components/ChildTOParentC";
// import {ControlledComponent} from "./Components/ControlledComponent";
// import Count from "./Components/Count";
// import {CountF} from "./Components/CountF";
// import {ExampleCustomHook} from "./Components/customHook/ExampleCustomHook";
// import ExampleOwnRef from "./Components/ExampleOwnRef";
// import ExampleOwnRefF from "./Components/ExampleOwnRefF";
// import ExceptionHandling from "./Components/ExceptionHandling/ExceptionHandling";
// import X from "./Components/ExceptionHandling/X";
// import {Footer} from "./Components/Footer";
// import {Header} from "./Components/Header";
// import Parent from "./Components/HOC/Parent";
// import {LifeCycleForFunctionalComponent} from "./Components/LifeCycleForFunctionalComponent";
// import {LifeCycleFunctionalComponentWillUnMount} from "./Components/LifeCycleFunctionalComponentWillUnMount";
// import LifeCycleMethodAjax from "./Components/LifeCycleMethodAjax";
// import LifeCycleMethods from "./Components/LifeCycleMethods";
// import ListKeys from "./Components/ListKeys";
// import {ListKeysPlayer} from "./Components/ListKeysPlayer";
// import {ListKeysSelect} from "./Components/ListKeysSelect";
// import {ListKeysTable} from "./Components/ListKeysTable";
// import {Menu} from "./Components/Menu";
// import A from "./Components/myContextF";
// import {ExampleReactMemo} from "./Components/myReactMemo";
// import {Player} from "./Components/Player";
// import PlayerC from "./Components/PlayerC";
// import Example from "./Components/PureComponent";
// import SetStateAsCB from "./Components/SetStateAsCB";
// import SetStateAsObjCb from "./Components/SetStateAsObjCb";
// import {TakingDataFUseRef} from "./Components/TakingDataFUseRef";
// import UnMountingPhase from "./Components/UnMountingPhase";
// import "./App.css";
// import {SampleUseReducerHook} from "./Components/GlobalStateUseReducer/SampleUseReducerHook";
// import {reducer} from "./Components/GlobalStateUseReducer/reducer";
// import {initData} from "./Components/GlobalStateUseReducer/initData";
// import {ctx} from "./Components/GlobalStateUseReducer/myctx";
// import {AxiosAjax} from "./Components/AxiosAjax";
// import {ExampleUseCallback} from "./Components/ExampleUseCallback";
// import {ExampleForUseMemo} from "./Components/ExampleForUseMemo";
// import {A} from "./Components/myContextF";

import {useRef, useState} from "react";

// const App = () => {
//   return (
//     <div>
//       <div>
//         <Box n="1" loc="mumbai" name="kaela"></Box>
//         <Box n="2" />
//         <Box n="3" />
//       </div>
//       <div>
//         <Box n="4" />
//         <Box n="5" />
//         <Box n="6" />
//       </div>
//       <div>
//         <Box n="7" />
//         <Box n="8" />
//         <Box n="9" />
//       </div>
//     </div>
//   );
// };

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <BoxC n="1" name="Kaela" />
//           <BoxC n="2" />
//           <BoxC n="3" />
//         </div>
//         <div>
//           <BoxC />
//           <BoxC />
//           <BoxC />
//         </div>
//         <div>
//           <BoxC />
//           <BoxC />
//           <BoxC />
//         </div>
//       </div>
//     );
//   }
// }

// const App = () => {
//   return (
//     <div>
//       <PlayerC name="Sachin" loc="Mumbai" />
//       <PlayerC name="Dhoni" loc="Ranchi" />
//       <PlayerC name="kohli" loc="Delhi" />
//       <PlayerC name="Kaela" loc="US" />
//     </div>
//   );
// };
// export default App;

// const App = () => {
//   return (
//     <div>
//       {/* <Count /> */}
//       <CountF />
//     </div>
//   );
// };

// const App = () => {
//   const [name, setName] = useState("KAELA");
//   const getData = (data) => {
//     setName(data);
//   };
//   return (
//     <div>
//       I'm Parent::::::{name}
//       <h1>
//         <ChildToParent fn={getData} />
//       </h1>
//     </div>
//   );
// };

// export default class App extends Component {
// constructor(){
//   super()
//   this.state={
//     n:""
//   }
// }
//   state = {
//     n: "SSSS"
//   };
//   getData = (data) => {
//     this.setState({
//       n: data
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Data which is coming from Child to Parent:::::{this.state.n}</h1>
//         <ChildTOParentC kaela={this.getData} />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   state = {
//     isChild: true
//   };
//   handleCHild = () => {
//     this.setState({
//       isChild: !this.state.isChild
//     });
//   };
//   render() {
// let child;
// if (this.state.isChild) {
//   child = <Child />;
// } else {
//   child = <h1>Child is not there</h1>;
// }
//     return (
//       <div>
//         {/* {this.state.isChild ? <Child /> : <h1>Child is not there</h1>} */}
//         {this.state.isChild && <Child />}
//         <button onClick={this.handleCHild}>Button</button>
//       </div>
//     );
//   }
//   constructor() {
//     super();
//     console.log("constructor");
//   }
// }
// export default App;

// const Child = () => {
//   return <h1>I'm child</h1>;
// };
//jsx ->javascript, html tags, xml or user defined or custom tags

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "KAELA"
//     };
//   }
//   getName = (data) => {
//     this.setState({
//       name: data
//     });
//   };

//   render() {
//     return (
//       <div>
//         {/* <LifeCycleMethods />
//         <UnMountingPhase /> */}
//         {/* <ExceptionHandling /> */}
//         {/* <X /> */}
//         {/* <Example /> */}
//         {/* <Parent /> */}
//         {/* <LifeCycleMethods name="KAELA" loc="US" /> */}
//         {/* <LifeCycleMethodAjax name={this.state.name} getName={this.getName} /> */}
//         {/* <A /> */}
//         {/* <A /> */}
//         {/* <A /> */}
//         {/* <TakingDataFUseRef /> */}
//         {/* <ExampleOwnRefF /> */}
//         {/* <ExampleReactMemo /> */}
//         {/* <ExampleCustomHook /> */}
//         {/* <ControlledComponent /> */}
//         {/* <LifeCycleForFunctionalComponent /> */}
//         {/* <LifeCycleFunctionalComponentWillUnMount /> */}
//         {/* <Header />
//         <Menu />
//         <Footer /> */}
//       </div>
//     );
//   }
// }
// const App = () => {
//   const [state, dispatch] = useReducer(reducer, initData);
//   return (
//     <div>
//       <ctx.Provider value={{state, dispatch}}>
//         <SampleUseReducerHook />
//         <ChildTOParentC />
//         <AxiosAjax />
//         <h1>USECALLBACK</h1>
//         <ExampleUseCallback />
//         <h1>USEMEMO</h1>
//         <ExampleForUseMemo />
//       </ctx.Provider>
//     </div>
//   );
// };
// export default App;

export const App = () => {
  const [data, setData] = useState();
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const handleInc = () => {
    let inputValue = inputRef.current.value;
    setCount(count + Number(inputValue));
  };

  const handleDec = () => {
    let inputValue = inputRef.current.value;
    setCount(count - Number(inputValue));
  };
  return (
    <>
      <h1>Count</h1>
      <h2>{data}</h2>
      <button onClick={handleInc}>+</button>
      <input
        ref={inputRef}
        type="number"
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleDec}>-</button>
      <h2>{count}</h2>
    </>
  );
};
