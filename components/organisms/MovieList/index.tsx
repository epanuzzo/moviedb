import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MovieList: React.FC = () => {
    const movieList = [
        { id: 1, title: 'The Shawshank Redemption', year: 1994, image: 'https://www.cinematerial.com/media/box-office/1462764.jpg' },
        { id: 2, title: 'The Godfather', year: 1972, image: 'https://www.cinematerial.com/media/box-office/5090568.jpg' },
        { id: 3, title: 'The Godfather: Part II', year: 1974, image: 'https://www.cinematerial.com/media/box-office/15671028.jpg' },
        { id: 4, title: 'The Dark Knight', year: 2008, image: 'https://www.cinematerial.com/media/box-office/15789038.jpg' },
        { id: 5, title: 'Transformers: Rise of the Beasts', year: 2023, image: 'https://www.cinematerial.com/media/box-office/9362722.jpg' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
            {movieList.map((movie) => (
                <Link href={`/movie/${movie.id}`}
                    key={movie.title}
                    className="relative bg-white rounded-md shadow-lg overflow-hidden h-80 hover:cursor-pointer"
                >
                    <Image
                        src={movie.image}
                        alt={movie.title}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0 w-full h-full hover:scale-105 transition-transform"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <h3 className="text-lg font-semibold text-white">{movie.title}</h3>
                    </div>
                    <div className="absolute top-4 left-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center">
                        <p className="text-sm font-bold">{movie.year}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default MovieList;
