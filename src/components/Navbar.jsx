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
    if (path === 'home') {
      return window.location.pathname === '/' ? activeIconPath : iconPath;
    }

    return window.location.pathname === `/${path}` ? activeIconPath : iconPath;
  };


  useEffect(() => {
    // console.log(homeIcon)
    setHomeIcon(isActive("home"));
    setMapIcon(isActive("map"));
    setSearchIcon(isActive("search"));
    setChatIcon(isActive("chat"));
    setProfileIcon(isActive("profile"));
  }, [location]);

  return (
    <nav className=" fixed bottom-0 w-full h-[80px] pb-0 bg-navbarBg backdrop-blur-sm" aria-label="Main Navigation">
      <div className="flex flex-row justify-between items-center p-full h-full" role="menu">
        <Link to="/" role="menuitem">
          <div className="flex flex-col items-center">
            <img src={homeIcon} alt="Home" />
            <p className={`text-[12px] font-[400] ${homeIcon === "/assets/icon-nav-home.svg" ? "text-[#AAAAAA]" : "text-primary-pink"}`}>Home</p>
          </div>
        </Link>
        <Link to="/map" role="menuitem">
          <div className="flex flex-col items-center">
            <img src={mapIcon} alt="Map" />
            <p className={`text-[12px] font-[400] ${mapIcon === "/assets/icon-nav-map.svg" ? "text-[#AAAAAA]" : "text-primary-pink"}`}>Map</p>
          </div>
        </Link>
        <Link to="/search" role="menuitem">
          <div className="flex flex-col items-center">
            <img src={searchIcon} alt="Search" />
            <p className={`text-[12px] font-[400] ${searchIcon === "/assets/icon-nav-search.svg" ? "text-[#AAAAAA]" : "text-primary-pink"}`}>Search</p>
          </div>
        </Link>
        <Link to="/chat" role="menuitem">
          <div className="flex flex-col items-between">
            <img src={chatIcon} alt="Chat" />
            <p className={`text-[12px] font-[400] ${chatIcon === "/assets/icon-nav-chat.svg" ? "text-[#AAAAAA]" : "text-primary-pink"}`}>Chat</p>
          </div>
        </Link>
        <Link to="/profile" role="menuitem">
          <div className="flex flex-col items-center">
            <img src={profileIcon} alt="Profile" />
            <p className={`text-[12px] font-[400] ${profileIcon === "/assets/icon-nav-profile.svg" ? "text-[#AAAAAA]" : "text-primary-pink"}`}>Profile</p>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;