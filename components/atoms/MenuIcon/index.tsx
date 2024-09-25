import React from "react";

type MenuIconProps = {
  toggleMenu: () => void;
};

const MenuIcon: React.FC<MenuIconProps> = ({ toggleMenu }) => {
  return (
    <button className="ml-2 md:hidden text-white" onClick={toggleMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M3 4h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
        />
      </svg>
    </button>
  );
};

export default MenuIcon;
