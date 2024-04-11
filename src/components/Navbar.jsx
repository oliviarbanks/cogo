import { Link } from "react-router-dom";

const Navbar = () => {
  return (
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
      </div>
    </nav>
  );
};

export default Navbar;
