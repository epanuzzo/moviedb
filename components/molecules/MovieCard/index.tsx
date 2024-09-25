import React from "react";
import Image from "next/image";
import Link from "next/link";
import YearCircle from "@/components/atoms/YearCircle";

type MenuItemsProps = {
  id: number;
  title: string;
  image: string;
  year: string | number;
};

const MenuItems: React.FC<MenuItemsProps> = ({ id, title, image, year }) => {
  return (
    <Link
      href={`/movie/${id}`}
      className="relative bg-white rounded-md shadow-lg overflow-hidden h-80 hover:cursor-pointer"
    >
      <Image
        src={image}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 w-full h-full hover:scale-105 transition-transform"
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <YearCircle text={year} />
    </Link>
  );
};

export default MenuItems;
