import {Component} from "react";
import {ctx} from "./context/context";

//prop drilling
class A extends Component {
  constructor() {
    super();
    this.name = {
      n: "KAELA",
      l: "US"
    };
  }
  render() {
    return (
      <div>
        <ctx.Provider value={this.name}>
          <B />
        </ctx.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div>
        <C />
        <ctx.Consumer>{(data) => <span>{data.n}</span>}</ctx.Consumer>
      </div>
    );
  }
}
class C extends Component {
  render() {
    console.log(this, "current object");
    let data = this.context;
    return (
      <div>
        I'm C component:::: {data.n}....
        {data.l}
        <D />
      </div>
    );
  }
}
C.contextType = ctx;

class D extends Component {
  render() {
    return (
      <div>
        <h1>
          I'm D:::::
          <ctx.Consumer>
            {(data) => (
              <div>
                Name:{data.n}...Loc:{data.l}
              </div>
            )}
          </ctx.Consumer>
        </h1>
      </div>
    );
  }
}

export default A;
