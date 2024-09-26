import { fetchMovies, fetchMovieDetails, fetchMoviesByName } from "./movieApi";
import { movieDBInstance } from "../utils/config";

jest.mock("../utils/config");

describe("movieApi", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("fetchMovies", () => {
    it("should fetch movies with default parameters", async () => {
      const mockResponse = { data: "mockData" };
      (movieDBInstance.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await fetchMovies();

      expect(movieDBInstance.get).toHaveBeenCalledWith("/discover/movie", {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          primary_release_year: 1990,
          sort_by: "popularity.desc",
          "vote_average.gte": 8,
          year: 1990,
        },
      });
      expect(result).toBe(mockResponse);
    });

    it("should fetch movies with specified page", async () => {
      const mockResponse = { data: "mockData" };
      (movieDBInstance.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await fetchMovies(2);

      expect(movieDBInstance.get).toHaveBeenCalledWith("/discover/movie", {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 2,
          primary_release_year: 1990,
          sort_by: "popularity.desc",
          "vote_average.gte": 8,
          year: 1990,
        },
      });
      expect(result).toBe(mockResponse);
    });
  });

  describe("fetchMovieDetails", () => {
    it("should fetch movie details by ID", async () => {
      const mockResponse = { data: "mockData" };
      (movieDBInstance.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await fetchMovieDetails(123);

      expect(movieDBInstance.get).toHaveBeenCalledWith("/movie/123");
      expect(result).toBe(mockResponse);
    });
  });

  describe("fetchMoviesByName", () => {
    it("should fetch movies by name", async () => {
      const mockResponse = { data: "mockData" };
      (movieDBInstance.get as jest.Mock).mockResolvedValue(mockResponse);

      const result = await fetchMoviesByName("Inception");

      expect(movieDBInstance.get).toHaveBeenCalledWith("/search/movie", {
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          primary_release_year: 1990,
          sort_by: "popularity.desc",
          "vote_average.gte": 8,
          year: 1990,
          query: "Inception",
        },
      });
      expect(result).toBe(mockResponse);
    });
  });
});
