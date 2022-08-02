import React, {PureComponent} from "react";

export default class Example extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "KAELA",
      count: 0
    };
  }
  render() {
    alert(" parent render");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({name: "KAELA"})}>
          NO CHANGE
        </button>
        <button
          onClick={() => {
            this.setState({count: this.state.count + 1});
          }}
        >
          Inc Count{this.state.count}
        </button>
        <Child />
      </div>
    );
  }
}

class Child extends PureComponent {
  render() {
    alert("child got called");
    return <div>I'm Child Component</div>;
  }
}
