import React from "react";
import renderer from "react-test-renderer";
import Rating from "./index";

describe("Rating", () => {
  it("renders component", () => {
    const tree = renderer.create(<Rating isLarge text="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders component with alt props", () => {
    const tree = renderer.create(<Rating text="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
