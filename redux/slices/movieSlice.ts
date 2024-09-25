import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies } from "@/api/movieApi";

type MovieState = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  movies: any[];
  loading: boolean;
  error: string | null;
  pages: number;
  currentPage: number;
};

const initialState: MovieState = {
  movies: [],
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
      });
  },
});

export default movieSlice.reducer;
