import React from "react";
import MovieCard from "@/components/molecules/MovieCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { imageUrl } from "@/utils/config";

/**
 * MovieList component displays a list of movies fetched from the Redux store.
 *
 * This component uses the `useSelector` hook to access the `movies` and `error`
 * properties from the `movie` slice of the Redux state.
 *
 * If there is an error, it displays the error message.
 * If there are no movies, it displays a "No movies found!" message.
 * Otherwise, it renders a grid of `MovieCard` components, each representing a movie.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
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
          rating={movie.vote_average}
          image={imageUrl + movie.poster_path}
          missingImage={!movie.poster_path}
          key={movie.title}
        />
      ))}
    </div>
  );
};

export default MovieList;
