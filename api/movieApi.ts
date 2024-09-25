import { movieDBInstance } from "../utils/config";

export const fetchMovies = async (page?: number) => {
  return await movieDBInstance.get(`/discover/movie`, {
    params: {
      include_adult: false,
      include_video: false,
      language: "en-US",
      page: page || 1,
      primary_release_year: 1990,
      sort_by: "popularity.desc",
      "vote_average.gte": 8,
      year: 1990,
    },
  });
};

// export const searchMovies = async (query: string) => {
//   return await movieDBInstance.get(`/discover/movie`, {
//     params: { query },
//   });
// };
