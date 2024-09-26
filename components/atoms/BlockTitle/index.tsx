import React from "react";

type BlockTitleProps = {
  children: string;
};

/**
 * BlockTitle component renders a heading element with specific styling.
 *
 * @param {React.PropsWithChildren<BlockTitleProps>} props - The properties passed to the component.
 * @returns {JSX.Element} A heading element containing the children elements.
 */
const BlockTitle: React.FC<BlockTitleProps> = ({ children }) => {
  return <h3 className="text-2xl font-semibold mb-4">{children}</h3>;
};

export default BlockTitle;
