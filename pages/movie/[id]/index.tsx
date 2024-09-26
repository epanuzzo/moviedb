import Loader from "@/components/atoms/Loader";
import MovieDetails from "@/components/organisms/MovieDetails";
import { getMovieDetails } from "@/redux/slices/movieSlice";
import { AppDispatch, RootState } from "@/redux/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/**
 * MoviePage component is responsible for displaying the details of a specific movie.
 * It fetches the movie details based on the movie ID from the URL query parameters.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * - Utilizes `useRouter` from Next.js to access the movie ID from the URL.
 * - Uses `useDispatch` and `useSelector` from Redux to manage state and dispatch actions.
 * - Fetches movie details if not already available in the state.
 * - Displays a loading indicator while fetching data.
 * - Shows a "Movie not found" message if the movie ID is invalid or the movie is not found.
 *
 * @example
 * ```tsx
 * import MoviePage from 'path/to/MoviePage';
 *
 * const App = () => (
 *   <MoviePage />
 * );
 * ```
 */
const MoviePage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch<AppDispatch>();
  const { movies, moviesDetails, loading } = useSelector(
    (state: RootState) => state.movie
  );

  const movie = movies.find((movie) => movie.id === Number(id));

  useEffect(() => {
    const numberId = Number(id);
    if (isNaN(numberId) || moviesDetails[numberId]) return;

    dispatch(getMovieDetails(numberId));
  }, [dispatch, id, moviesDetails]);

  if (!id || !movie)
    return (
      <div className="flex items-center justify-center h-90 w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Movie not found</h1>
          <p className="text-gray-600">
            Please check the movie ID and try again.
          </p>
          <p className="text-gray-600">
            Use only navigation from the home page.
          </p>
          <p className="text-gray-600">Reload will not work.</p>
        </div>
      </div>
    );

  return (
    <div className="w-full h-full">
      {loading ? <Loader /> : <MovieDetails id={Number(id)} />}
    </div>
  );
};

export default MoviePage;
