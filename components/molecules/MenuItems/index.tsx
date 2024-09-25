import React from "react";
import Link from "next/link";

type MenuItemProps = {
  url: string;
  text: string;
};

type MenuItemsProps = {
  active: string;
  isMobile?: boolean;
  wrapperClassName?: string;
  menuItems?: MenuItemProps[];
};

const MenuItems: React.FC<MenuItemsProps> = ({
  active,
  isMobile = false,
  wrapperClassName = "",
  menuItems = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
  ],
}) => {
  return (
    <nav
      className={`${
        isMobile
          ? "flex md:hidden flex-col space-y-4 pt-4"
          : "hidden md:flex space-x-4 pl-4"
      } ${wrapperClassName}`}
    >
      {menuItems.map((item: MenuItemProps) => (
        <Link
          href={item.url}
          className={`text-1xl ${active === item.url ? "underline" : ""}`}
          key={item.url}
          passHref
        >
          {item.text}
        </Link>
      ))}
    </nav>
  );
};

export default MenuItems;
