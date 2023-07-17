import { NavLink } from "react-router-dom";
import { BiSearchAlt, BiHeart, BiCart, BiMenu, BiX } from 'react-icons/bi';
import { HiLanguage} from 'react-icons/hi2';
import { useCallback, useEffect, useState } from "react";
import { Trans } from 'react-i18next';




const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedLang, setSelectedLang] = useState(localStorage.getItem("lang") == "ar"? "ar":"en");

  const handleToAr =()=>{
    
    setSelectedLang("ar")
    localStorage.setItem("lang" , "ar")
    window.location.reload()


  }
  const handleToEn =()=>{
    setSelectedLang("en")
    localStorage.setItem("lang" , "en")
    window.location.reload()
  }


  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <nav className="flex flex-col lg:flex-row justify-around capitalize mt-2 select-none gap-y-4">
      <h1 className="font-semibold text-2xl text-center">
        Tech<span className="text-red-300">Zone</span>.
      </h1>

      {/* Menu Icon */}
      <button className="lg:hidden absolute top-4 right-3" onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <BiX className="text-2xl cursor-pointer" />
        ) : (
          <BiMenu className="text-2xl cursor-pointer" />
        )}
      </button>

      {/* Nav Links */}
      <ul
        className={`flex 
          flex-col  lg:flex-row
         items-center justify-between gap-3 uppercase  ${isMenuOpen ? '  flex' : 'hidden'
          } lg:flex ${selectedLang == "ar" ? 'lg:flex-row-reverse' :null } `}
      >
        <li>
          <NavLink to={"/"}>
            <span className="relative after:w-full after:h-1 after:top-0 after:left-0  hover:after:bg-blue-400  after:absolute  hover:after:top-6  after:transition-all after:duration-300">
              <Trans>Home</Trans> 
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/categories"}>
            <span className="relative after:w-full after:h-1 after:top-0 after:left-0  hover:after:bg-blue-400  after:absolute  hover:after:top-6  after:transition-all after:duration-300">
              <Trans>Categories</Trans>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>
            <span className="relative after:w-full after:h-1 after:top-0 after:left-0  hover:after:bg-blue-400  after:absolute  hover:after:top-6  after:transition-all after:duration-300">
              <Trans>About Us</Trans>
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>
            <span className="relative after:w-full after:h-1 after:top-0 after:left-0  hover:after:bg-blue-400  after:absolute  hover:after:top-6  after:transition-all after:duration-300">
              <Trans>Contact Us</Trans> 
            </span>
          </NavLink>
        </li>
      </ul>

      <div className="flex flex-col lg:flex-row items-center gap-4">
        <div className="relative flex items-center border rounded-full px-2 p-1 bg-white drop-shadow-md">
          <input
            type="text"
            id="search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-transparent placeholder-gray-600 w-48 p-1 outline-none"
          />
          <label htmlFor="search" className="cursor-pointer">
            <BiSearchAlt />
          </label>
          <h1
            className={`absolute ${searchValue || isFocused
              ? '-top-2 left-4 bg-white text-sm text-gray-600'
              : 'top-2 -z-10 left-2 text-base text-gray-400'
              } transition-all`}
          >
            <Trans>Search Products</Trans> 
          </h1>
        </div>

        <div className="flex gap-5">
          <div className="group relative rounded-full drop-shadow-md bg-white p-2 cursor-pointer border hover:bg-red-500 hover:text-white transition-all duration-300">
            <BiHeart className="text-xl" />
            <div className="absolute top-0 -right-2 w-2 h-2 p-2 flex items-center justify-center text-white bg-blue-500 rounded-full group-hover:bg-white group-hover:text-blue-500 font-semibold transition-all duration-300">5</div>
          </div>

          <div className="group relative rounded-full drop-shadow-md bg-white p-2 cursor-pointer border hover:bg-blue-500 hover:text-white transition-all duration-300">
            <BiCart className="text-xl" />
            <div className="absolute top-0 -right-2 w-2 h-2 p-2 flex items-center justify-center text-white bg-blue-500 rounded-full group-hover:bg-white group-hover:text-blue-500 font-semibold transition-all duration-300">2</div>
          </div>

          {selectedLang == "ar" ?
           <div className="group  rounded-full drop-shadow-md bg-white p-2 cursor-pointer border hover:bg-blue-500 hover:text-white transition-all duration-300" onClick={handleToEn}>
            <HiLanguage className="text-xl" />
          </div> :<div className="group  rounded-full drop-shadow-md bg-white p-2 cursor-pointer border hover:bg-blue-500 hover:text-white transition-all duration-300" onClick={handleToAr}>
            <HiLanguage className="text-xl" />
          </div>   }

          <button className="px-5 p-2 rounded-2xl bg-blue-500 text-white cursor-pointer text-center">
            <Trans>Sign In</Trans> 
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
