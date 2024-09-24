import MenuIcon from '@/components/atoms/MenuIcon';
import MenuItems from '@/components/molecules/MenuItems';
import SearchBar from '@/components/molecules/SearchBar';
import React, { useState } from 'react';
import { TbMovie } from "react-icons/tb";
import useIsMobile from "@/utils/hooks/useIsMobile";
import useActivePage from '@/utils/hooks/useActivePage';
import { slogan } from "@/utils/config";


const Header: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useIsMobile();
  const { activePage } = useActivePage();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search text', searchText);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-8  border-solid border-b border-slate-300">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <TbMovie className="w-7 h-7 text-white opacity-30" />
          <span className="text-lg font-semibold opacity-30">{slogan}</span>
          {!isMobile && <MenuItems active={activePage} />}
        </div>
        {!isMobile && (
          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            handleSearchChange={handleSearchChange}
          />
        )}
        {isMobile && (
          <MenuIcon
            toggleMenu={toggleMenu}
          />
        )}
      </div>
      {isMobile && (
        <div className="mt-4">
          <MenuItems active={activePage} isMobile wrapperClassName={`${isMenuOpen ? 'block mb-4' : 'hidden'}`} />
          <SearchBar
            handleSearchSubmit={handleSearchSubmit}
            handleSearchChange={handleSearchChange}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
