import React from "react";
import renderer from "react-test-renderer";
import MovieInfo from "./index";

describe("MovieInfo", () => {
  it("renders component", () => {
    const tree = renderer
      .create(<MovieInfo name="Name">Child</MovieInfo>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
