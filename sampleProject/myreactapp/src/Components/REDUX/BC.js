import React, {Component, createRef} from "react";
import {connect} from "react-redux";
import myStore from "../../store/store";

class BC extends Component {
  constructor() {
    super();
    this.locRef = createRef(null);
  }
  handleName = () => {
    let loc = this.locRef.current.value;
    // myStore.dispatch({
    //   type: "LOCC",
    //   loc
    // });
    this.props.d({
      type: "LOCC",
      loc
    });
  };
  render() {
    return (
      <div>
        <input ref={this.locRef} />
        <button onClick={this.handleName}>LOC</button>
      </div>
    );
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    d: dispatch
  };
};

export default connect(null, mapDispatchProps)(BC);
