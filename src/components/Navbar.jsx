import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

    const [homeIcon, setHomeIcon] = useState("");
    const [mapIcon, setMapIcon] = useState("");
    const [searchIcon, setSearchIcon] = useState("");
    const [chatIcon, setChatIcon] = useState("");
    const [profileIcon, setProfileIcon] = useState("");
  
    const location = useLocation();

    const isActive = (path) => {
        const iconPath = `/assets/icon-nav-${path}.svg`;
        const activeIconPath = `/assets/icon-nav-${path}-active.svg`;
        if (path === 'home')
        {
            return window.location.pathname === '/' ? activeIconPath : iconPath;
        }

        return window.location.pathname === `/${path}` ? activeIconPath : iconPath;
    };

  
    useEffect(() => {
        setHomeIcon(isActive("home"));
        setMapIcon(isActive("map"));
        setSearchIcon(isActive("search"));
        setChatIcon(isActive("chat"));
        setProfileIcon(isActive("profile"));
    }, [location]);
  
  return (
<<<<<<< HEAD
    <nav className="fixed bottom-0 w-full h-[60px] bg-red-500" aria-label="Main Navigation ">
      <div role="menu">
        <Link to="/" role="menuitem">
          Home
        </Link>
        <Link to="/map" role="menuitem">
          Map
        </Link>
        <Link to="/search" role="menuitem">
          Search
        </Link>
        <Link to="/profile" role="menuitem">
          Profile
        </Link>
=======
    <nav className=" fixed bottom-0 w-full h-[60px] 
    rounded-t-[15px] rounded-b-[var(--Radius-Sharp, 0px)] shadow-sm shadow-y-reverse bg-[#2B051E]" aria-label="Main Navigation ">
      <div className="flex flex-row justify-evenly items-center p-full "  role="menu">
      <Link to="/" role="menuitem">
      <div className="flex flex-col items-center">
        <img src={homeIcon} alt="Home" />
        <span className='text-white'>Home</span>
      </div>
    </Link>
    <Link to="/map" role="menuitem">
      <div className="flex flex-col items-center">
        <img src={mapIcon} alt="Map" />
        <span className='text-white'>Map</span>
      </div>
    </Link>
    <Link to="/search" role="menuitem">
      <div className="flex flex-col items-center">
        <img src={searchIcon} alt="Search" />
        <span className='text-white'>Search</span>
      </div>
    </Link>
    <Link to="/chat" role="menuitem">
      <div className="flex flex-col items-center">
        <img src={chatIcon} alt="Chat" />
        <span className='text-white'>Chat</span>
      </div>
    </Link>
    <Link to="/profile" role="menuitem">
      <div className="flex flex-col items-center">
        <img src={profileIcon} alt="Profile" />
        <span className='text-white'>Profile</span>
      </div>
    </Link>
>>>>>>> 155752d14d3ce44b9cb11bffa67a4c7b526ca0f7
      </div>
    </nav>
  );
};

export default Navbar;