import React, {Component} from "react";

export default class LifeCycleMethodAjax extends Component {
  //   handleAjax = () => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         console.log(data);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   };
  constructor() {
    super();
    this.state = {
      data: []
    };
  }
  static getDerivedStateFromProps() {}

  changeName = () => {
    this.props.getName("ARPITHA");
  };
  render() {
    return (
      <div>
        5000 lines of code...
        {/* {this.state?.data?.map((obj, i) => {
          return <h1 key={i}>{obj.title}</h1>;
        })} */}
        <h1>{this.props.name}</h1>
        <button onClick={this.changeName}>Click me to change the name</button>
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({
          data
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
