import React, {Component} from "react";
import ExceptionBoundary from "./ExceptionBoundary";
import Hero from "./Hero";

export default class X extends Component {
  render() {
    return (
      <div>
        <ExceptionBoundary>
          <Hero hero="jjjjj" />
        </ExceptionBoundary>
      </div>
    );
  }
}
