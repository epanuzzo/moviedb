import Pagination from '@/components/molecules/Pagination';
import MovieList from '@/components/organisms/MovieList';
import React from 'react';
import Loader from '@/components/atoms/Loader';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-48">
        <h1 className="text-4xl font-bold text-center">Welcome to the Movie App</h1>
      </div>
      <MovieList />
      <Pagination
        currentPage={2}
        totalPages={3}
        onNext={() => {}}
        onPrevious={() => {}}
        onPageChange={() => {}}
      />
      <Loader />
    </div>
  )
};

export default HomePage;