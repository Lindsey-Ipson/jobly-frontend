import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <ul>
        <li>
          <NavLink exact to="/" className="NavLink">
            Jobly
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/companies" className="NavLink">
            Companies
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/jobs" className="NavLink">
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/profile" className="NavLink">
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" className="NavLink">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/signup" className="NavLink">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/logout" className="NavLink">
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
