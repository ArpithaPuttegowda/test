import {Component} from "react";

export default class ExceptionBoundary extends Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }
  static getDerivedStateFromError() {
    alert("error got occured");
    console.log("getDerivedStateFromError");
    return {
      isError: true
    };
  }

  componentDidCatch(error, errorInfo) {
    alert("arpitha");
    // You can also log the error to an error reporting service
    console.log(error, errorInfo, "componentDidCatch");
  }
  render() {
    return this.state.isError ? "Something went wrong" : this.props.children;
  }
}
