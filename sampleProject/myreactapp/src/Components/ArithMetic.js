import React, {Component, createRef} from "react";

export default class ArithMetic extends Component {
  constructor() {
    super();
    this.n1 = createRef();
    this.n2 = createRef();
    this.nameRef = createRef();
    this.state = {
      output: 0,
      color: "cr"
    };
  }
  handleSum = () => {
    let n1 = this.n1.current.value;
    let n2 = this.n2.current.value;
    this.nameRef.current.innerText = "KAELA";
    let sum = Number(n1) + Number(n2);
    this.setState({
      output: sum,
      color: sum > 100 ? "cv" : "cp"
    });
    this.n1.current.value = "";
    this.n2.current.value = "";
  };
  render() {
    console.log(this, "current object");
    return (
      <div>
        <p>
          <b>N1:</b> <input ref={this.n1} />
        </p>
        <p>
          <b>N2:</b> <input ref={this.n2} />
        </p>
        <p>
          <button onClick={this.handleSum}>Sum</button>
        </p>
        <h1 style={{color: this.state.output > 100 ? "red" : "green"}}>
          Result:::{this.state.output}
        </h1>
        <h1 className={this.state.color}>Result::{this.state.output}</h1>
        <span ref={this.nameRef} style={{color: "green"}}></span>
      </div>
    );
  }
}
