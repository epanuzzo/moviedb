import React from "react";
import MovieCard from "@/components/molecules/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { imageUrl } from "@/utils/config";

const MovieList: React.FC = () => {
  const { movies, error } = useSelector((state: RootState) => state.movie);

  if (error) {
    return <h1 className="text-4xl font-bold text-center">{error}</h1>;
  }

  if (!movies.length) {
    return <h1 className="text-4xl font-bold text-center">No movies found!</h1>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {movies.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          year={movie.vote_average}
          image={imageUrl + movie.poster_path}
          missingImage={!movie.poster_path}
          key={movie.title}
        />
      ))}
    </div>
  );
};

export default MovieList;
