import MovieList from '@/components/organisms/MovieList';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="flex justify-center items-center h-48">
        <h1 className="text-4xl font-bold text-center">Welcome to the Movie App</h1>
      </div>
      <MovieList />
    </div>
  )
};

export default HomePage;