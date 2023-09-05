import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../store/slice/authSlice";
import "./navBar.css";

const Navbar = ({ updateCartVisible }) => {
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

  const handleCartClick = (e) => {
    e.preventDefault();
    if (isLogged === false) {
      navigate("/login");
    } else {
      updateCartVisible(e);
    }
  };

  return (
    <>
      <nav className="navBar">
        <NavLink className="navBar_navLink" to={"/"}>
          <h2 className="navBar_h2">BRAND</h2>
        </NavLink>
        <div>
          <NavLink className="navBar_navLink" to={userTo}>
            <i className={`bx bx-user ${isLogged ? "" : "logout"}`}></i>
          </NavLink>

          <NavLink className="navBar_navLink" onClick={handleCartClick}>
            <i className={`bx bx-shopping-bag ${isLogged ? "" : "logout"}`}></i>
          </NavLink>
        </div>
        {isLogged ? (
          <button className="navButton logout" onClick={logout}>
            <i className="bx bx-log-out"></i>
          </button>
        ) : (
          <button className="navButton login" onClick={login}>
            <i className="bx bx-log-in-circle"></i>
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
