import React from "react";
import Link from "next/link";
import Rating from "@/components/atoms/Rating";
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
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { imageOriginalUrl } from "@/utils/config";

type MovieDetailsProps = {
  id: number;
};

/**
 * Component to display detailed information about a specific movie.
 *
 * @component
 * @param {MovieDetailsProps} props - The properties for the MovieDetails component.
 * @param {number} props.id - The ID of the movie to display details for.
 * @returns {JSX.Element | null} The JSX element for the movie details or null if the movie is not found.
 *
 * @example
 * <MovieDetails id={123} />
 *
 * @remarks
 * This component fetches movie details from the Redux store using the movie ID.
 * It displays various information about the movie including title, tagline, overview,
 * production companies, runtime, genres, cast, and user reviews.
 *
 * @requires
 * - `useSelector` from 'react-redux' to access the Redux store.
 * - `Link` from 'next/link' for navigation.
 * - `Rating`, `MovieHeading`, `MovieInfo`, `Tag`, `BlockTitle`, `ActorDetails`, and `ReviewDetails` components for displaying movie details.
 */
const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const { moviesDetails } = useSelector((state: RootState) => state.movie);

  // TODO: Create variables by extracting from movie
  const movie = moviesDetails[id];

  if (!movie) return null;

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
        style={{
          backgroundImage: `url(${imageOriginalUrl}${
            movie.backdrop_path || movie.poster_path
          })`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-90"></div>
        <Rating text={movie.vote_average} isLarge />
      </div>

      <MovieHeading
        title={movie.title}
        tagline={movie.tagline}
        description={movie.overview}
      />

      <div className="mt-4 space-y-2">
        {!!movie.production_companies.length && (
          <MovieInfo name="Production">
            {movie.production_companies[0].name}
          </MovieInfo>
        )}
        {movie.runtime && (
          <MovieInfo name="Duration">{`${movie.runtime} minutes`}</MovieInfo>
        )}
        {!!movie.genres.length && (
          <MovieInfo name="Genres">
            {movie.genres.map((genre: { id: number; name: string }) => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </MovieInfo>
        )}
      </div>

      {movie.cast && (
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
      )}

      {movie.reviews && (
        <div className="mt-6">
          <BlockTitle>User Reviews</BlockTitle>
          {movie.reviews.map((review: ReviewDetailsProps) => (
            <ReviewDetails key={review.user} {...review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
