import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../store/slice/authSlice";
import "./navBar.css";

const Navbar = ({ updateCardVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = useSelector((store) => store.auth.isLogged);

  const userTo = isLogged ? "/profile" : "/login";

  const logout = () => {
    dispatch(reset());
    navigate("/");
  };

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <nav>
        <NavLink className="mobile__toggleNavavButton">
          <i className="bx bx-menu"></i>
        </NavLink>
        <NavLink to={"/"}>
          <h2>TechStore</h2>
        </NavLink>
        <div>
          <NavLink to={userTo}>
            <i className="bx bx-user"></i>
          </NavLink>
          <button className="desktop__searchNavButton">
            <i className="bx bx-search-alt-2"></i>
          </button>
          <NavLink onClick={updateCardVisible}>
            <i className="bx bx-shopping-bag"></i>
          </NavLink>
        </div>
        {isLogged ? (
          <button className="navButton" onClick={logout}>
            <i className="bx bx-log-out"></i>
            <span style={{ fontSize: "10px" }}>Log-out</span>
          </button>
        ) : (
          <button className="navButton" onClick={login}>
            <i className="bx bx-log-in-circle"></i>
            <span style={{ fontSize: "10px" }}>Log-in</span>
          </button>
        )}
      </nav>
      <header className="navbar__header">
        <Link to="/">
          <h1>Create the Future, Today.</h1>
        </Link>
      </header>
    </>
  );
};

export default Navbar;
