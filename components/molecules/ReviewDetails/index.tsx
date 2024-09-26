import React from "react";

export type ReviewDetailsProps = {
  user: string;
  rating: number;
  comment: string;
  date: string;
};

/**
 * ReviewDetails component displays the details of a movie review.
 *
 * @component
 * @param {ReviewDetailsProps} props - The properties object.
 * @param {string} props.user - The name of the user who wrote the review.
 * @param {number} props.rating - The rating given by the user, out of 10.
 * @param {string} props.comment - The comment provided by the user.
 * @param {string} props.date - The date when the review was written.
 * @returns {JSX.Element} The rendered component displaying the review details.
 */
const ReviewDetails: React.FC<ReviewDetailsProps> = ({
  user,
  rating,
  comment,
  date,
}) => {
  const formatedDate = new Date(date).toLocaleDateString();
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <div className="flex justify-between">
        <p className="font-semibold">{user}</p>
        <p className="text-sm">{rating} / 10</p>
      </div>
      <p className="text-gray-400 mt-2">{comment}</p>
      <p className="text-xs text-gray-500 mt-2">{formatedDate}</p>
    </div>
  );
};

export default ReviewDetails;
