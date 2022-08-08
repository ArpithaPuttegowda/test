import React, {Component} from "react";

export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      name: "KAELA"
    };
  }
  handleInc = () => {
    // this.state.count = this.state.count + 1;
    this.setState({
      count: this.state.count + 1,
      name: "ARPITHA"
    });
    console.log(this.state.count, "output");
  };
  render() {
    console.log("kaela", this);
    return (
      <div>
        <button onClick={this.handleInc}>Inc Count</button>
        <h1>
          COunt...{this.state.count}...{this.state.name}
        </h1>
      </div>
    );
  }
}
