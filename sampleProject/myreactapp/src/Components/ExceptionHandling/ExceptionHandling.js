import React, {Component} from "react";
import ExceptionBoundary from "./ExceptionBoundary";
import Hero from "./Hero";

export default class ExceptionHandling extends Component {
  render() {
    return (
      <div>
        <ExceptionBoundary>
          <Hero hero="Sachin"></Hero>
        </ExceptionBoundary>
        <ExceptionBoundary>
          <Hero hero="Ethan" />
        </ExceptionBoundary>
        <ExceptionBoundary>
          <Hero hero="joker" />
        </ExceptionBoundary>
      </div>
    );
  }
}
