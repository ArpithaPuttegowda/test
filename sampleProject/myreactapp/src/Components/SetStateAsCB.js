import React, {Component} from "react";

export default class SetStateAsCB extends Component {
  state = {
    count: 0,
    name: "Kaela"
  };

  handleInc1 = () => {
    // this.setState((preState) => {
    //   return {
    //     count: preState.count + 1
    //   };
    // });
    this.setState((preState) => ({
      count: preState.count + 1
    }));
  };

  handleInc5 = () => {
    this.handleInc1();
    this.handleInc1();
    this.handleInc1();
    this.handleInc1();
    this.handleInc1();
  };
  render() {
    return (
      <div>
        <button onClick={this.handleInc1}>Inc Count1</button>
        <button onClick={this.handleInc5}>Inc Count5</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}
