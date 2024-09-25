import React from "react";
import Image from "next/image";
import Link from "next/link";
import Rating from "@/components/atoms/Rating";

type MovieCardProps = {
  id: number;
  title: string;
  image: string;
  rating: string | number;
  missingImage?: boolean;
};

const MovieCard: React.FC<MovieCardProps> = ({
  id,
  title,
  image,
  rating,
  missingImage,
}) => {
  return (
    <Link
      href={`/movie/${id}`}
      className="relative bg-white rounded-md shadow-lg overflow-hidden h-80 hover:cursor-pointer"
    >
      {missingImage ? (
        <div className="w-full h-full bg-gray-800 flex items-center justify-center">
          <p className="text-white">Image not found</p>
        </div>
      ) : (
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full hover:scale-105 transition-transform"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <Rating text={rating} />
    </Link>
  );
};

export default MovieCard;
