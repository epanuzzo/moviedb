import React from "react";
import Link from "next/link";
import YearCircle from "@/components/atoms/YearCircle";
import BlockTitle from "@/components/atoms/BlockTitle";
import MovieInfo from "@/components/molecules/MovieInfo";
import ActorDetails, {
  ActorDetailsProps,
} from "@/components/molecules/ActorDetails";
import ReviewDetails, {
  ReviewDetailsProps,
} from "@/components/molecules/ReviewDetails";
import Tag from "@/components/atoms/Tag";
import MovieHeading from "@/components/molecules/MovieHeading";

const MovieDetails: React.FC = () => {
  const movie = {
    id: 1,
    title: "Inception",
    description:
      "A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious.",
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
    backdrop:
      "https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
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
        comment:
          "Mind-bending movie! A visual masterpiece with an intricate plot.",
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
        <Link
          href="/"
          className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          ← Back to Movies list
        </Link>
      </div>
      <div
        className="relative w-full h-80 bg-cover bg-center rounded-lg overflow-hidden"
        style={{ backgroundImage: `url(${movie.backdrop})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <YearCircle text={movie.year} isLarge />
      </div>

      <MovieHeading
        title={movie.title}
        tagline={movie.tagline}
        description={movie.description}
      />

      <div className="mt-4 space-y-2">
        <MovieInfo name="Director">{movie.director}</MovieInfo>
        <MovieInfo name="Duration">{`${movie.duration} minutes`}</MovieInfo>
        <MovieInfo name="Genres">
          {movie.genre.map((genre: string) => (
            <Tag key={genre}>{genre}</Tag>
          ))}
        </MovieInfo>
      </div>

      <div className="mt-6">
        <BlockTitle>Cast</BlockTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {movie.cast.map((actor: ActorDetailsProps) => (
            <ActorDetails
              key={actor.name}
              name={actor.name}
              role={actor.role}
            />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <BlockTitle>User Reviews</BlockTitle>
        {movie.reviews.map((review: ReviewDetailsProps) => (
          <ReviewDetails key={review.user} {...review} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetails;
