import React from "react";

type TagProps = {
  children: string;
};

/**
 * A functional component that renders a tag with specific styling.
 *
 * @component
 * @param {TagProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be displayed inside the tag.
 * @returns {JSX.Element} A styled span element containing the children.
 */
const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm mr-2 my-2">
      {children}
    </span>
  );
};

export default Tag;
