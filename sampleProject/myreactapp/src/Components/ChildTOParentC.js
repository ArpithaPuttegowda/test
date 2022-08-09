import React, {Component} from "react";
import {ctx} from "./GlobalStateUseReducer/myctx";

export default class ChildTOParentC extends Component {
  constructor() {
    super();
    this.myData = "INDIA";
  }
  handleClick = () => {
    this.props.kaela(this.myData);
  };
  render() {
    console.log(this, "***");
    const storeParams = this.context;
    console.log(storeParams, "storeparams");
    return (
      <div>
        <button onClick={this.handleClick}>
          Pass Data from Child TO parent
        </button>
        <h1>NAME:::{storeParams.state.name}</h1>
        <h1>LOC:::{storeParams.state.loc}</h1>
      </div>
    );
  }
}

ChildTOParentC.contextType = ctx;
