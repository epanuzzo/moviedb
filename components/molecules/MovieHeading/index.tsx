import React from "react";

export type MovieHeadingProps = {
  title: string;
  tagline: string;
  description: string;
};

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
