import React from "react";

const myHOC = (Comp) => {
  class HigherComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    handleInc = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
    render() {
      return <Comp count={this.state.count} handler={this.handleInc} />;
    }
  }
  return HigherComponent;
};

export default myHOC;
