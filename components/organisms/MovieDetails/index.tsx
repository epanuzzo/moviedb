import React from 'react';
import Link from 'next/link';

const MovieDetails: React.FC = () => {
    const movie = {
        id: 1,
        title: "Inception",
        description: "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
        year: 2010,
        genre: ["Action", "Adventure", "Science Fiction"],
        duration: 148, // in minutes
        rating: 8.8, // IMDb rating or other ratings
        director: "Christopher Nolan",
        cast: [
            { name: "Leonardo DiCaprio", role: "Dom Cobb" },
            { name: "Joseph Gordon-Levitt", role: "Arthur" },
            { name: "Ellen Page", role: "Ariadne" },
            { name: "Tom Hardy", role: "Eames" },
            { name: "Ken Watanabe", role: "Saito" },
            { name: "Cillian Murphy", role: "Robert Fischer" },
        ],
        poster: "https://image.tmdb.org/t/p/w500/cTNYRUTXkBgPH3wP3kmPUB5U6dA.jpg",
        backdrop: "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
        trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0", // YouTube trailer link
        productionCompanies: [
            {
                name: "Warner Bros. Pictures",
                logo: "https://image.tmdb.org/t/p/w92/1HoCuHgfjRSEcKIKD2VQIlQ6XMz.jpg",
            },
            {
                name: "Legendary Pictures",
                logo: "https://image.tmdb.org/t/p/w92/c7M1sBkxYH6Rfb8Lyjy6QdB5SDH.jpg",
            },
        ],
        releaseDate: "2010-07-16",
        budget: 160000000, // Budget in USD
        revenue: 829895144, // Revenue in USD
        language: "English",
        country: "United States",
        tagline: "Your mind is the scene of the crime.",
        reviews: [
            {
                user: "JohnDoe123",
                rating: 9,
                comment: "Mind-bending movie! A visual masterpiece with an intricate plot.",
                date: "2023-07-01",
            },
            {
                user: "MovieBuff456",
                rating: 8,
                comment: "Great acting and direction. A bit confusing but worth it!",
                date: "2023-07-02",
            },
        ],
    };
      
    return (
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
            <div className="mb-6">
                <Link href="/" className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md">
                    ← Back to Movies list
                </Link>
            </div>
            <div className="relative w-full h-80 bg-cover bg-center rounded-lg overflow-hidden" style={{ backgroundImage: `url(${movie.backdrop})` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
            <div className="absolute top-4 left-4 bg-white text-black rounded-full w-12 h-12 flex items-center justify-center">
                <span className="text-lg font-bold">{movie.year}</span>
            </div>
            </div>

            <div className="mt-6">
                <h1 className="text-4xl font-bold">{movie.title}</h1>
                <p className="text-gray-400 italic">{movie.tagline}</p>
                <p className="mt-4 text-lg">{movie.description}</p>
            </div>

            <div className="mt-4 space-y-2">
                <p><span className="font-semibold">Director:</span> {movie.director}</p>
                <p><span className="font-semibold">Duration:</span> {movie.duration} minutes</p>
                <p>
                    <span className="font-semibold">Genres:</span>{' '}
                    {movie.genre.map((g: string) => (
                    <span key={g} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm mr-2 my-2">{g}</span>
                    ))}
                </p>
            </div>

            <div className="mt-6">
                <h3 className="text-2xl font-semibold mb-4">Cast</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {movie.cast.map((actor: { name: string; role: string }) => (
                    <div key={actor.name} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white">
                            {actor.name[0]}
                        </div>
                        <div>
                            <p className="font-semibold">{actor.name}</p>
                            <p className="text-gray-400 text-sm">as {actor.role}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-4">User Reviews</h3>
            {movie.reviews.map((review: { user: string; rating: number; comment: string; date: string }) => (
                <div key={review.user} className="bg-gray-800 p-4 rounded-lg mb-4">
                    <div className="flex justify-between">
                        <p className="font-semibold">{review.user}</p>
                        <p className="text-sm">{review.rating} / 10</p>
                    </div>
                    <p className="text-gray-400 mt-2">{review.comment}</p>
                    <p className="text-xs text-gray-500 mt-2">{new Date(review.date).toLocaleDateString()}</p>
                </div>
            ))}
            </div>
        </div>
    );
};

export default MovieDetails;
