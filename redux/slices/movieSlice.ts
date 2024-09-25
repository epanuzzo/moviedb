import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieDetails, fetchMovies } from "@/api/movieApi";

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

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.pages = action.payload.total_pages;
        state.currentPage = action.payload.page;
        state.movies = action.payload.results;
      })
      .addCase(getMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      })
      .addCase(getMovieDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMovieDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.moviesDetails[action.payload.id] = action.payload;
      })
      .addCase(getMovieDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch movies";
      });
  },
});

export default movieSlice.reducer;
