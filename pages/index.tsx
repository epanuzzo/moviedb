import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/slices/movieSlice";
import { AppDispatch, RootState } from "../redux/store";
import Pagination from "@/components/molecules/Pagination";
import MovieList from "@/components/organisms/MovieList";
import Loader from "@/components/atoms/Loader";

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, loading, pages, currentPage } = useSelector(
    (state: RootState) => state.movie
  );

  useEffect(() => {
    dispatch(getMovies());
  }, []);

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
