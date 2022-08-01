import React, {Component} from "react";

export default class PlayerC extends Component {
  render() {
    console.log(this, "current objec");
    return (
      <div>
        I'm {this.props.name}...I'm {this.props.loc}
      </div>
    );
  }
}
