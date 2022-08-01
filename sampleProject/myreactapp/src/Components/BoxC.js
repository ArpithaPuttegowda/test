import React, {Component} from "react";

export default class BoxC extends Component {
  render() {
    console.log(this, "current obj");
    return (
      <div id="box">
        {this.props.n}...{this.props.name}
      </div>
    );
  }
}
