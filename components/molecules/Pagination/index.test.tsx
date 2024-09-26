import React from "react";
import renderer from "react-test-renderer";
import Pagination from "./index";

describe("Pagination", () => {
  it("renders component", () => {
    const tree = renderer
      .create(
        <Pagination
          currentPage={1}
          totalPages={10}
          onNext={jest.fn()}
          onPrevious={jest.fn()}
          onPageChange={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
