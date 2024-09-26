import React from "react";
import renderer from "react-test-renderer";
import ActorDetails from "./index";

describe("ActorDetails", () => {
  it("renders component", () => {
    const tree = renderer
      .create(<ActorDetails name="John" role="Actor" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
