import React, {Component} from "react";

export default class LifeCycleMethods extends Component {
  //mounting
  constructor(p) {
    super();
    this.state = {
      count: 0,
      color: "red"
    };
    console.log("constructor", p.name, p.loc);
  }

  //mounting && updating
  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    if (nextState.count === 2) {
      return {
        count: 10000
      };
    }
  }

  //updating
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }

  //mouting && updating
  render() {
    console.log("render", this.props.name);
    return (
      <div>
        <button onClick={() => this.setState({count: this.state.count + 1})}>
          Inc count
        </button>
        <h1>
          {this.state.count}....{this.state.name}
        </h1>
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
    debugger;
    console.log("componentDidMount");
  }
}
