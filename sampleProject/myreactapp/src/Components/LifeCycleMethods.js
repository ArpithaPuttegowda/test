import React, {Component} from "react";

export default class LifeCycleMethods extends Component {
  //mounting
  constructor() {
    super();
    this.state = {
      count: 0
    };
    console.log("constructor");
  }

  //mounting && updating
  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps");
    return null;
  }

  //updating
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  //mouting && updating
  render() {
    console.log("render");
    return (
      <div>
        <button onClick={() => this.setState({count: 1000})}>Inc count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }

  //updating
  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  //updating
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  //mounting
  componentDidMount() {
    console.log("componentDidMount");
  }
}
