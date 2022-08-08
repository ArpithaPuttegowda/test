import React, {Component} from "react";
import {connect} from "react-redux";
import myStore from "../../store/store";

class CC extends Component {
  constructor() {
    super();
    this.myStoreData = myStore.getState();
  }

  componentDidMount() {
    myStore.subscribe(() => {
      this.myStoreData = myStore.getState();
    });
  }

  render() {
    return (
      <div>
        <h1 style={{color: "red"}}>State by connect method</h1>
        <h1>NAME:{this.props.n}</h1>
        <h1>LOC:{this.props.l}</h1>

        <h1 style={{color: "blue"}}>State by getState method</h1>
        <h1>NAME:{this.myStoreData.reducerC.name}</h1>
        <h1>LOC:{this.myStoreData.reducerC.loc}</h1>
      </div>
    );
  }
}

const msp = (state) => {
  return {
    n: state.reducerC.name,
    l: state.reducerC.loc
  };
};

export default connect(msp)(CC);
