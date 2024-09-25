import { movieDBInstance } from "../utils/config";

const getRequestParams = (page?: number) => ({
  include_adult: false,
  include_video: false,
  language: "en-US",
  page: page || 1,
  primary_release_year: 1990,
  sort_by: "popularity.desc",
  "vote_average.gte": 8,
  year: 1990,
});

export const fetchMovies = async (page?: number) => {
  return await movieDBInstance.get(`/discover/movie`, {
    params: getRequestParams(page),
  });
};

export const fetchMovieDetails = async (id: number) => {
  return await movieDBInstance.get(`/movie/${id}`);
};

export const fetchMoviesByName = async (query: string) => {
  return await movieDBInstance.get(`/search/movie`, {
    params: { ...getRequestParams(), query },
  });
};
