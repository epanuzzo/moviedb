import React from "react";

type TagProps = {
  children: string;
};

const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm mr-2 my-2">
      {children}
    </span>
  );
};

export default Tag;
