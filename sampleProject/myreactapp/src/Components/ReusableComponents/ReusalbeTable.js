import React, {Component} from "react";

export default class ReusalbeTable extends Component {
  render() {
    return (
      <div>
        <table border="1px solid">
          <thead>
            {this.props?.headers?.map((header) => {
              return <th>{header}</th>;
            })}
          </thead>
          <tbody>
            {this.props?.data?.map((obj) => {
              return (
                <tr>
                  {this.props?.keys?.map((k, i) => {
                    return <td>{obj[k]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
