import React from "react";

type YearCircleProps = {
  isLarge?: boolean;
  text: number | string;
};

const YearCircle: React.FC<YearCircleProps> = ({ isLarge = false, text }) => {
  const size = isLarge ? "w-12 h-12" : "w-10 h-10";
  return (
    <div
      className={`absolute top-4 left-4 bg-white text-black rounded-full flex items-center justify-center ${size}`}
    >
      <p className="text-sm font-bold">{text}</p>
    </div>
  );
};

export default YearCircle;
