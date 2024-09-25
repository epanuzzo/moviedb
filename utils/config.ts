import axios from "axios";

export const slogan = "Best of '90 Movies";
export const tabletBreakpoint = 768;
export const moviePagesCount = 10;
export const moviesPerPage = 10;
export const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const apiToken = process.env.NEXT_PUBLIC_TMDB_API_TOKEN;
export const apiUrl = "https://api.themoviedb.org/3/";
export const imageUrl = "https://image.tmdb.org/t/p/w500";
export const imageOriginalUrl = "https://image.tmdb.org/t/p/original";

export const movieDBInstance = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${apiToken}`,
  },
});
