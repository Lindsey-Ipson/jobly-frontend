import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../common/UserContext";
import "./navbar.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  const loggedInNavBar = (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/" className="NavLink">
            Jobly
          </NavLink>
        </li>
        <li>
          <NavLink to="/companies" className="NavLink">
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink to="/jobs" className="NavLink">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="NavLink">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={ logout } className="NavLink">
            Logout {currentUser && currentUser.username}
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  const loggedOutNavBar = (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink to="/" className="NavLink">
            Jobly
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className="NavLink">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="NavLink">
            Signup
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  return currentUser ? loggedInNavBar : loggedOutNavBar;
}

export default NavBar;
