import React from "react";

type RatingProps = {
  isLarge?: boolean;
  text: number | string;
};

/**
 * Rating component displays a rating badge with customizable size.
 *
 * @component
 * @param {object} props - Component props
 * @param {boolean} [props.isLarge=false] - Determines the size of the rating badge. If true, a larger size is applied.
 * @param {string} props.text - The text to display inside the rating badge.
 * @returns {JSX.Element} The rendered rating badge component.
 */
const Rating: React.FC<RatingProps> = ({ isLarge = false, text }) => {
  const size = isLarge ? "w-12 h-12" : "w-10 h-10";
  return (
    <div
      className={`absolute top-4 left-4 bg-white text-black rounded-full flex items-center justify-center ${size}`}
    >
      <p className="text-sm font-bold">{text}</p>
    </div>
  );
};

export default Rating;
