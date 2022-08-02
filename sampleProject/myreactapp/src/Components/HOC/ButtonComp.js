import React, {Component} from "react";
import myHOC from "./HOC";

class ButtonComp extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handler}>
          Inc Count{this.props.count}
        </button>
      </div>
    );
  }
}

export default myHOC(ButtonComp);
