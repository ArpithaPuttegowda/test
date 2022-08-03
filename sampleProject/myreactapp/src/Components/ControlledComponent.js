import React, {Component} from "react";

export class ControlledComponent extends Component {
  constructor() {
    super();
    this.data = {};
  }
  handleRegister = () => {
    console.log("Mydata", this.data);
  };
  handleChange = (eve) => {
    let id = eve.target.id;
    let val = eve.target.value;
    this.data = {...this.data, [id]: val};
  };
  render() {
    return (
      <div>
        <p>
          <b>Name:</b>
          <input onChange={this.handleChange} id="name" />
        </p>
        <p>
          <b>Password:</b>
          <input onChange={this.handleChange} id="pwd" />
        </p>
        <p>
          <b>Phone NO:</b>
          <input onChange={this.handleChange} id="phNo" />
        </p>
        <p>
          <button onClick={this.handleRegister}>Registration</button>
        </p>
      </div>
    );
  }
}
