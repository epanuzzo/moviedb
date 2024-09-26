import React from "react";
import renderer from "react-test-renderer";
import MovieList from "./index";
import { useSelector } from "react-redux";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

describe("MovieList", () => {
  beforeEach(() => {
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
    const tree = renderer.create(<MovieList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with error", () => {
    (useSelector as unknown as jest.Mock).mockReturnValueOnce({
      movies: [],
      loading: true,
      pages: 0,
      currentPage: 0,
      error: "error",
    });

    const tree = renderer.create(<MovieList />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with no movies", () => {
    (useSelector as unknown as jest.Mock).mockReturnValueOnce({
      movies: [],
      loading: true,
      pages: 0,
      currentPage: 0,
    });

    const tree = renderer.create(<MovieList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
