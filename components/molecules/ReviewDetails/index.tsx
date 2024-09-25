import React from "react";

type ReviewDetailsProps = {
  user: string;
  rating: number;
  comment: string;
  date: string;
};

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
