import React from "react";
import renderer from "react-test-renderer";
import MovieDetails from "./index";
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

describe("MovieDetails", () => {
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
        "1": {
          id: 1,
          title: "Movie 1",
          production_companies: [{ name: "Mock" }],
          genres: [{ id: 1, name: "Action" }],
          cast: [{ name: "Actor 1", role: "Role 1" }],
          reviews: [
            { user: "name", rating: 5, comment: "comment", date: "2021-09-01" },
          ],
        },
      },
      loading: false,
      pages: 2,
      currentPage: 1,
    });
  });

  it("renders the component", () => {
    const tree = renderer.create(<MovieDetails id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the component with no movie", () => {
    (useSelector as unknown as jest.Mock).mockReturnValueOnce({
      movies: [],
      moviesDetails: {},
      loading: false,
      pages: 0,
      currentPage: 0,
    });
    const tree = renderer.create(<MovieDetails id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
