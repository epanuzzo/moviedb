import React from "react";
import renderer from "react-test-renderer";
import MenuIcon from "./index";

describe("MenuIcon", () => {
  it("renders component", () => {
    const tree = renderer.create(<MenuIcon toggleMenu={jest.fn()} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
