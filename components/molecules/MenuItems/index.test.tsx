import React from "react";
import renderer from "react-test-renderer";
import MenuItems from "./index";

describe("MenuItems", () => {
  it("renders component", () => {
    const tree = renderer.create(<MenuItems active="/" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders component with alt props", () => {
    const tree = renderer
      .create(<MenuItems active="/" isMobile wrapperClassName="test-class" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
