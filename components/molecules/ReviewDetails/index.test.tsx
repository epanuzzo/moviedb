import React from "react";
import renderer from "react-test-renderer";
import ReviewDetails from "./index";

describe("ReviewDetails", () => {
  it("renders component", () => {
    const tree = renderer
      .create(
        <ReviewDetails
          user="User"
          rating={5}
          comment="Comment"
          date="2021-01-01"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
