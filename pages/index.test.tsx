import React from "react";
import renderer from "react-test-renderer";
import HomePage from "./index";
import { useDispatch, useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../redux/slices/movieSlice", () => ({
  getMovies: jest.fn(),
}));

describe("HomePage", () => {
  let mockDispatch: jest.Mock;

  beforeEach(() => {
    mockDispatch = jest.fn();
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockReturnValue({
      movies: [
        { id: 1, title: "Movie 1" },
        { id: 2, title: "Movie 2" },
      ],
      loading: false,
      pages: 2,
      currentPage: 1,
    });
  });

  it("renders the component", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays loading state", () => {
    (useSelector as unknown as jest.Mock).mockReturnValueOnce({
      movies: [],
      loading: true,
      pages: 0,
      currentPage: 0,
    });

    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
