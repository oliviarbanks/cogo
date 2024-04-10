import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav aria-label="Main Navigation">
      <div role="menu">
        <Link to="/" role="menuitem">Home</Link>
        <Link to="/Search" role="menuitem">Search</Link>
        <Link to="/Trips" role="menuitem">Trips</Link>
        <Link to="/Profile" role="menuitem">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
