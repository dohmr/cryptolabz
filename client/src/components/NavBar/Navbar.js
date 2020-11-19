import { NavLink } from "react-router-dom";
import { useAuth } from "../../util/authContext";

import "./Navbar.css";

function Navbar() {
  const { isLoggedIn, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <NavLink
        className="nav-link"
        exact
        to="/"
        activeClassName="nav-link-active"
      >
        Home
      </NavLink>
      <NavLink
        className="nav-link"
        exact
        to="/coins"
        activeClassName="nav-link-active"
      >
        Coins
      </NavLink>
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/login"
          activeClassName="nav-link-active"
        >
          Login
        </NavLink>
      )}
      {isLoggedIn || (
        <NavLink
          className="nav-link"
          to="/signup"
          activeClassName="nav-link-active"
        >
          Signup
        </NavLink>
      )}
      {isLoggedIn && (
        <NavLink
          className="nav-link"
          to="/protected/example"
          activeClassName="nav-link-active"
        >
          Portfolio
        </NavLink>
      )}
      {isLoggedIn && <button onClick={logout}>Logout</button>}
    </nav>
  );
}
export default Navbar;
