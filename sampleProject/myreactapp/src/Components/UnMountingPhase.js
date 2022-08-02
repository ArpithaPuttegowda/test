import React, {Component} from "react";

export default class UnMountingPhase extends Component {
  state = {
    isLoadChild: true
  };
  render() {
    return (
      <div>
        {this.state.isLoadChild && <Child />}
        <button
          onClick={() => {
            this.setState({isLoadChild: !this.state.isLoadChild});
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("componentWillUnmount");
    clearInterval(this.id);
  }
  render() {
    return <div>I'm a child component</div>;
  }
  componentDidMount() {
    this.id = setInterval(() => {
      console.log("KAELA");
    }, 5000);
  }
}
