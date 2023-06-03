import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLogged = useSelector((store) => {
    store.auth.isLogged;
  });

  const userTo = isLogged ? "/profile" : "/login";

  return (
    <nav>
      <NavLink className="mobile__toggleNavavButton">🟰</NavLink>
      <h2>TechStore</h2>
      <div>
        <NavLink to={userTo}>👤</NavLink>
        <button className="desktop__searchNavButton">🔍</button>
        <NavLink>🛍️</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
