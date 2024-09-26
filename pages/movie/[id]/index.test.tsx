import React from "react";
import renderer from "react-test-renderer";
import MoviePage from "./index";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

jest.mock("../../../redux/slices/movieSlice", () => ({
  getMovieDetails: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("MoviePage", () => {
  let mockDispatch: jest.Mock;
  let mockRouter: unknown;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockRouter = {
      pathname: "/current-page",
      push: jest.fn(),
      query: { id: "1" },
    };

    (useRouter as unknown as jest.Mock).mockReturnValue(mockRouter);
    (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
    (useSelector as unknown as jest.Mock).mockReturnValue({
      movies: [
        { id: 1, title: "Movie 1" },
        { id: 2, title: "Movie 2" },
      ],
      moviesDetails: {
        "1": { id: 1, title: "Movie 1", production_companies: [], genres: [] },
      },
      loading: false,
      pages: 2,
      currentPage: 1,
    });
  });

  it("renders the component", () => {
    const tree = renderer.create(<MoviePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays error message", () => {
    (useSelector as unknown as jest.Mock).mockReturnValueOnce({
      movies: [],
      moviesDetails: {},
      loading: false,
      pages: 0,
      currentPage: 0,
    });

    const tree = renderer.create(<MoviePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays loading state", () => {
    (useSelector as unknown as jest.Mock).mockReturnValueOnce({
      movies: [{ id: 1, title: "Movie 1" }],
      moviesDetails: {},
      loading: true,
      pages: 1,
      currentPage: 1,
    });

    const tree = renderer.create(<MoviePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
