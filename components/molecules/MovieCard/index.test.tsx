import React from "react";
import renderer from "react-test-renderer";
import MovieCard from "./index";

describe("MovieCard", () => {
  it("renders component", () => {
    const tree = renderer
      .create(
        <MovieCard
          id={1}
          title="Test"
          image="https://placehold.co/600x400"
          rating={5}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders component with alt props", () => {
    const tree = renderer
      .create(
        <MovieCard id={1} title="Test" image="" rating={5} missingImage />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
