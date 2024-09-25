import React from "react";
import MovieCard from "@/components/molecules/MovieCard";

const MovieList: React.FC = () => {
  const movieList = [
    {
      id: 1,
      title: "The Shawshank Redemption",
      year: 1994,
      image: "https://www.cinematerial.com/media/box-office/1462764.jpg",
    },
    {
      id: 2,
      title: "The Godfather",
      year: 1972,
      image: "https://www.cinematerial.com/media/box-office/5090568.jpg",
    },
    {
      id: 3,
      title: "The Godfather: Part II",
      year: 1974,
      image: "https://www.cinematerial.com/media/box-office/15671028.jpg",
    },
    {
      id: 4,
      title: "The Dark Knight",
      year: 2008,
      image: "https://www.cinematerial.com/media/box-office/15789038.jpg",
    },
    {
      id: 5,
      title: "Transformers: Rise of the Beasts",
      year: 2023,
      image: "https://www.cinematerial.com/media/box-office/9362722.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {movieList.map((movie) => (
        <MovieCard
          id={movie.id}
          title={movie.title}
          year={movie.year}
          image={movie.image}
          key={movie.title}
        />
      ))}
    </div>
  );
};

export default MovieList;
