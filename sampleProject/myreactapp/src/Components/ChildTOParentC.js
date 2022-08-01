import React, {Component} from "react";

export default class ChildTOParentC extends Component {
  constructor() {
    super();
    this.myData = "INDIA";
  }
  handleClick = () => {
    this.props.kaela(this.myData);
  };
  render() {
    console.log(this, "***");
    return (
      <div>
        <button onClick={this.handleClick}>
          Pass Data from Child TO parent
        </button>
      </div>
    );
  }
}
