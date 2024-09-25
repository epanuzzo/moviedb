import React from "react";

type BlockTitleProps = {
  children: string;
};

const BlockTitle: React.FC<BlockTitleProps> = ({ children }) => {
  return <h3 className="text-2xl font-semibold mb-4">{children}</h3>;
};

export default BlockTitle;
