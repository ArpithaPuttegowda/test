import React, {Component} from "react";

export default class ListKeys extends Component {
  render() {
    const arr = ["KAELE", "Sachin", "DHONI", "KOHLI", "PANTH", "ARpitha"];
    return (
      <div>
        {arr.map((v, i) => {
          return <h1 key={v + i}>{v}</h1>;
        })}
      </div>
    );
  }
}
