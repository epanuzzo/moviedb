import { configureStore } from "@reduxjs/toolkit";
import movieReducer, {
  getMovies,
  getMovieDetails,
  searchMovieByName,
} from "./movieSlice";

jest.mock("@/api/movieApi");

const mockStore = configureStore({
  reducer: {
    movie: movieReducer,
  },
});

describe("movieSlice", () => {
  beforeEach(() => {
    mockStore.dispatch({ type: "RESET" });
  });

  it("should handle initial state", () => {
    const state = mockStore.getState().movie;
    expect(state).toEqual({
      movies: [],
      moviesDetails: {},
      loading: false,
      error: null,
      pages: 0,
      currentPage: 0,
    });
  });

  it("should handle getMovies.pending", () => {
    mockStore.dispatch(getMovies.pending("requestId", 0));
    const state = mockStore.getState().movie;
    expect(state.loading).toBe(true);
    expect(state.error).toBe(null);
  });

  it("should handle getMovies.fulfilled", () => {
    const payload = {
      total_pages: 5,
      page: 1,
      results: [{ id: 1, title: "Movie 1" }],
    };
    mockStore.dispatch(getMovies.fulfilled(payload, "requestId", 0));
    const state = mockStore.getState().movie;
    expect(state.loading).toBe(false);
    expect(state.pages).toBe(5);
    expect(state.currentPage).toBe(1);
    expect(state.movies).toEqual([{ id: 1, title: "Movie 1" }]);
  });

  it("should handle getMovies.rejected", () => {
    const error = { name: "Error", message: "Failed to fetch movies" };
    mockStore.dispatch(getMovies.rejected(error, "requestId", 0));
    const state = mockStore.getState().movie;
    expect(state.loading).toBe(false);
    expect(state.error).toBe("Failed to fetch movies");
  });

  it("should handle getMovieDetails.fulfilled", () => {
    const payload = { id: 1, title: "Movie 1" };
    mockStore.dispatch(getMovieDetails.fulfilled(payload, "requestId", 0));
    const state = mockStore.getState().movie;
    expect(state.loading).toBe(false);
    expect(state.moviesDetails[1]).toEqual(payload);
  });

  it("should handle searchMovieByName.fulfilled", () => {
    const payload = {
      total_pages: 2,
      page: 1,
      results: [{ id: 2, title: "Movie 2" }],
    };
    mockStore.dispatch(searchMovieByName.fulfilled(payload, "requestId", "0"));
    const state = mockStore.getState().movie;
    expect(state.loading).toBe(false);
    expect(state.pages).toBe(2);
    expect(state.currentPage).toBe(1);
    expect(state.movies).toEqual([{ id: 2, title: "Movie 2" }]);
  });
});
