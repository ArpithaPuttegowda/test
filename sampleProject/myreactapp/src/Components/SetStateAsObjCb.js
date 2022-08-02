import React, {Component} from "react";

class SetStateAsObjCb extends Component {
  state = {
    count: 0
  };

  incCount = () => {
    this.setState(
      {
        count: this.state.count + 1
      },
      () => {
        console.log(this.state.count, "count inside cb");
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.incCount}>Inc Count</button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default SetStateAsObjCb;
