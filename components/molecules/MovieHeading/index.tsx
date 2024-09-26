import React from "react";

export type MovieHeadingProps = {
  title: string;
  tagline: string;
  description: string;
};

/**
 * MovieHeading component displays the main heading, tagline, and description of a movie.
 *
 * @component
 * @param {Object} props - The properties object.
 * @param {string} props.title - The title of the movie.
 * @param {string} props.tagline - The tagline of the movie.
 * @param {string} props.description - The description of the movie.
 * @returns {JSX.Element} The rendered MovieHeading component.
 */
const MovieHeading: React.FC<MovieHeadingProps> = ({
  title,
  tagline,
  description,
}) => {
  return (
    <div className="mt-6">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-400 italic">{tagline}</p>
      <p className="mt-4 text-lg">{description}</p>
    </div>
  );
};

export default MovieHeading;
