import React from "react";
import renderer from "react-test-renderer";
import MovieHeading from "./index";

describe("MovieHeading", () => {
  it("renders component", () => {
    const tree = renderer
      .create(
        <MovieHeading
          title="Movie Title"
          tagline="Tagline"
          description="Description"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
