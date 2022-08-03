import React, {Component} from "react";

export default class ExampleOwnRef extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
  }
  handleClick = () => {
    this.myRef.current.value = "Sachin";
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        <Child r={this.myRef} />
      </div>
    );
  }
}

class Child extends Component {
  render() {
    console.log(this);
    return (
      <span>
        <input ref={this.props.r} />
      </span>
    );
  }
}
