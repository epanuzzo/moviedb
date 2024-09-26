import { movieDBInstance } from "../utils/config";

/**
 * Generates request parameters for fetching movies from the API.
 *
 * @param {number} [page] - The page number for pagination. Defaults to 1 if not provided.
 * @returns {object} The request parameters including filters for adult content, video content, language, release year, sorting, and minimum vote average.
 */
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

/**
 * Fetches a list of movies from the movie database.
 *
 * @param {number} [page] - The page number to fetch. If not provided, the default page will be fetched.
 * @returns {Promise<AxiosResponse<any>>} A promise that resolves to the response from the movie database API.
 */
export const fetchMovies = async (page?: number) => {
  return await movieDBInstance.get(`/discover/movie`, {
    params: getRequestParams(page),
  });
};

/**
 * Fetches the details of a movie by its ID.
 *
 * @param id - The unique identifier of the movie.
 * @returns A promise that resolves to the movie details.
 */
export const fetchMovieDetails = async (id: number) => {
  return await movieDBInstance.get(`/movie/${id}`);
};

/**
 * Fetches movies by their name from the movie database.
 *
 * @param query - The name of the movie to search for.
 * @returns A promise that resolves to the response from the movie database API.
 */
export const fetchMoviesByName = async (query: string) => {
  return await movieDBInstance.get(`/search/movie`, {
    params: { ...getRequestParams(), query },
  });
};
