import {render, screen} from "@testing-library/react";
import {App} from "./App";

describe("App component", () => {
  it("should render app component", () => {
    let component = render(<App />);
    expect(component).toMatchSnapshot();
  });
});
