import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  fetchMovieDetails,
  fetchMovies,
  fetchMoviesByName,
} from "@/api/movieApi";

const handlePending = (state: MovieState) => {
  state.loading = true;
  state.error = null;
};

type MoviesPayload = {
  total_pages: number;
  page: number;
  results: unknown[];
};

const handleMoviesfulfilled = (
  state: MovieState,
  action: PayloadAction<MoviesPayload>
) => {
  state.loading = false;
  state.pages = action.payload.total_pages;
  state.currentPage = action.payload.page;
  state.movies = action.payload.results;
};

const handleMoviesRejected = (
  state: MovieState,
  action: any // eslint-disable-line @typescript-eslint/no-explicit-any
) => {
  state.loading = false;
  state.error = action.error.message || "Failed to fetch movies";
};

type MovieState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  moviesDetails: { [key: number]: any };
  loading: boolean;
  error: string | null;
  pages: number;
  currentPage: number;
};

const initialState: MovieState = {
  movies: [],
  moviesDetails: {},
  loading: false,
  error: null,
  pages: 0,
  currentPage: 0,
};

export const getMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page?: number) => {
    const response = await fetchMovies(page);
    return response.data;
  }
);

export const getMovieDetails = createAsyncThunk(
  "movies/fetchMovieDetails",
  async (id: number) => {
    const response = await fetchMovieDetails(id);
    return response.data;
  }
);

export const searchMovieByName = createAsyncThunk(
  "movies/searchMovieByName",
  async (name: string) => {
    const response = await fetchMoviesByName(name);
    return response.data;
  }
);

/**
 * Slice for managing movie-related state in the Redux store.
 *
 * @constant
 * @name movieSlice
 *
 * @description
 * This slice handles the state for movies, including fetching movie lists,
 * movie details, and searching movies by name. It uses extra reducers to handle
 * asynchronous actions related to movies.
 *
 * @property {string} name - The name of the slice.
 * @property {object} initialState - The initial state of the slice.
 * @property {object} reducers - An empty object for defining synchronous reducers.
 * @property {function} extraReducers - A function that defines how the slice handles
 *                                      asynchronous actions using a builder.
 *
 * @example
 * // Example usage:
 * import { movieSlice } from './redux/slices/movieSlice';
 *
 * // Access the reducer
 * const movieReducer = movieSlice.reducer;
 *
 * // Dispatch actions
 * dispatch(getMovies());
 * dispatch(getMovieDetails(movieId));
 * dispatch(searchMovieByName(movieName));
 */
const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, handlePending)
      .addCase(getMovies.fulfilled, handleMoviesfulfilled)
      .addCase(getMovies.rejected, handleMoviesRejected)

      .addCase(getMovieDetails.pending, handlePending)
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesDetails[action.payload.id] = action.payload;
      })
      .addCase(getMovieDetails.rejected, handleMoviesRejected)

      .addCase(searchMovieByName.pending, handlePending)
      .addCase(searchMovieByName.fulfilled, handleMoviesfulfilled)
      .addCase(searchMovieByName.rejected, handleMoviesRejected);
  },
});

export default movieSlice.reducer;
