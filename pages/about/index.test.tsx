import React from "react";
import renderer from "react-test-renderer";
import AboutText from "./index";

describe("AboutText", () => {
  it("renders the component", () => {
    const tree = renderer.create(<AboutText />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
