import React from "react";
import renderer from "react-test-renderer";
import BlockTitle from "./index";

describe("BlockTitle", () => {
  it("renders component", () => {
    const tree = renderer.create(<BlockTitle>Test</BlockTitle>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
