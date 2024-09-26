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

/**
 * MenuItems component renders a navigation menu with a list of links.
 * It supports both mobile and desktop layouts and highlights the active link.
 *
 * @param {MenuItemsProps} props - The properties for the MenuItems component.
 * @param {boolean} props.active - The URL of the currently active menu item.
 * @param {boolean} [props.isMobile=false] - Flag to determine if the menu should be displayed in mobile layout.
 * @param {string} [props.wrapperClassName=""] - Additional class names for the wrapper element.
 * @param {Array<MenuItemProps>} [props.menuItems=[
 *   { url: "/", text: "Home" },
 *   { url: "/about", text: "About" },
 * ]] - Array of menu items to be displayed.
 *
 * @returns {JSX.Element} The rendered navigation menu.
 */
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
