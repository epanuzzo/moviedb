import React from "react";
import renderer from "react-test-renderer";
import Tag from "./index";

describe("Rating", () => {
  it("renders component", () => {
    const tree = renderer.create(<Tag>Test</Tag>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
