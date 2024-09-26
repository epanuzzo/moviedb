import React from "react";
import renderer from "react-test-renderer";
import SearchBar from "./index";

describe("SearchBar", () => {
  it("renders component", () => {
    const tree = renderer
      .create(
        <SearchBar
          handleSearchSubmit={jest.fn()}
          handleSearchChange={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
