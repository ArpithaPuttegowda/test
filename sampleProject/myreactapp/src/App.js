import React, {useState, Component} from "react";
import {ApplyStylesDynamically} from "./Components/ApplyStylesDynamically";
import ArithMetic from "./Components/ArithMetic";
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
import Box from "./Components/Box";
import BoxC from "./Components/BoxC";
import {ChildToParent} from "./Components/ChildToParent";
import ChildTOParentC from "./Components/ChildTOParentC";
import Count from "./Components/Count";
import {CountF} from "./Components/CountF";
import {Player} from "./Components/Player";
import PlayerC from "./Components/PlayerC";

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

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <ArithMetic /> */}
        <ApplyStylesDynamically />
      </div>
    );
  }
}
export default App;
//jsx ->javascript, html tags, xml or user defined or custom tags
