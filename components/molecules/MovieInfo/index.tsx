import React from "react";

export type MovieInfoProps = {
  name: string;
  children: React.ReactNode;
};

const MovieInfo: React.FC<MovieInfoProps> = ({ name, children }) => {
  return (
    <p>
      <span className="font-semibold">{name}:</span> {children}
    </p>
  );
};

export default MovieInfo;
