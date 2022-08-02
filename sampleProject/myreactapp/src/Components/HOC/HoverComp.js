import React, {Component} from "react";
import myHOC from "./HOC";

class HoverComp extends Component {
  render() {
    return (
      <div>
        <h1 onMouseOver={this.props.handler}>HOVER ME{this.props.count}</h1>
      </div>
    );
  }
}
export default myHOC(HoverComp);
