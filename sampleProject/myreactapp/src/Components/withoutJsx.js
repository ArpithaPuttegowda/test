import {Component, createElement} from "react";

export default class WithoutJsx extends Component {
  render() {
    return createElement("h1", {id: "myDiv"}, "withoutJsx");
  }
}

export class WithoutJsx1 extends Component {
  render() {
    return createElement(
      "h1",
      {id: "myH1"},
      createElement("span", null, "KAELA"),
      createElement("span", null, "Arpitha")
    );
  }
}
