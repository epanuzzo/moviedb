import React from "react";

export type MovieInfoProps = {
  name: string;
  children: React.ReactNode;
};

/**
 * A React functional component that displays movie information.
 *
 * @component
 * @param {MovieInfoProps} props - The properties object.
 * @param {string} props.name - The name of the movie.
 * @param {React.ReactNode} props.children - The additional information about the movie.
 * @returns {JSX.Element} A paragraph element containing the movie name and additional information.
 */
const MovieInfo: React.FC<MovieInfoProps> = ({ name, children }) => {
  return (
    <p>
      <span className="font-semibold">{name}:</span> {children}
    </p>
  );
};

export default MovieInfo;
