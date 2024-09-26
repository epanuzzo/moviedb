import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store";
import Pagination from "@/components/molecules/Pagination";
import MovieList from "@/components/organisms/MovieList";
import Loader from "@/components/atoms/Loader";

/**
 * HomePage component
 *
 * This is the main page component for the movie database application.
 * It fetches and displays a list of movies from the 1990s.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 *
 * @remarks
 * - Uses `useDispatch` to dispatch actions to the Redux store.
 * - Uses `useSelector` to select state from the Redux store.
 * - Fetches movies on initial render if the movie list is empty.
 * - Displays a loading indicator while movies are being fetched.
 * - Displays a list of movies and pagination controls if there are movies and multiple pages.
 *
 * @example
 * ```tsx
 * import HomePage from './pages/index';
 *
 * const App = () => (
 *   <Provider store={store}>
 *     <HomePage />
 *   </Provider>
 * );
 *
 * export default App;
 * ```
 */
const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, pages, currentPage } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    // TODO: Fix rerendering issue
    if (!movies.length) {
      dispatch(getMovies());
    }
  }, [dispatch, movies]);

  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-48">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the best 1990 movies website
        </h1>
      </div>
      {loading ? <Loader /> : <MovieList />}
      {movies.length && pages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={pages}
          onNext={() => dispatch(getMovies(currentPage + 1))}
          onPrevious={() => dispatch(getMovies(currentPage - 1))}
          onPageChange={(page) => dispatch(getMovies(page))}
        />
      )}
    </div>
  );
};

export default HomePage;
