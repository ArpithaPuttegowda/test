import React, {Component, createRef} from "react";
import {connect} from "react-redux";

class AC extends Component {
  constructor() {
    super();
    this.nameRef = createRef(null);
  }
  handleName = () => {
    let name = this.nameRef.current.value;
    this.props.d({
      type: "NAMEC",
      payload: name
    });
  };
  render() {
    return (
      <div>
        <input ref={this.nameRef} />
        <button onClick={this.handleName}>Name</button>
      </div>
    );
  }
}

const msp = (state) => {};
const mdp = (dispatch) => {
  return {
    d: dispatch
  };
};

export default connect(msp, mdp)(AC);
