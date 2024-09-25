import MenuIcon from "@/components/atoms/MenuIcon";
import MenuItems from "@/components/molecules/MenuItems";
import SearchBar from "@/components/molecules/SearchBar";
import React, { useCallback, useState } from "react";
import { TbMovie } from "react-icons/tb";
import useIsMobile from "@/utils/hooks/useIsMobile";
import useActivePage from "@/utils/hooks/useActivePage";
import { slogan } from "@/utils/config";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { debounce } from "@/utils/helpers/debounce";
import { searchMovieByName } from "@/redux/slices/movieSlice";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchText, setSearchText] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isMobile = useIsMobile();
  const { activePage } = useActivePage();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearchChange = useCallback(
    debounce((e: unknown) => {
      const event = e as React.ChangeEvent<HTMLInputElement>;
      setSearchText(event.target.value);
    }, 300),
    []
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(searchMovieByName(searchText));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white py-4 px-8 border-solid border-b border-slate-300">
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
        {isMobile && <MenuIcon toggleMenu={toggleMenu} />}
      </div>
      {isMobile && (
        <div className="mt-4">
          <MenuItems
            active={activePage}
            isMobile
            wrapperClassName={`${isMenuOpen ? "block mb-4" : "hidden"}`}
          />
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
