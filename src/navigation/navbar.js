import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../common/UserContext";
import "./navbar.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  const loggedInNavBar = (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/companies" className="nav-link">
                Companies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/jobs" className="nav-link">
                Jobs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/" onClick={logout} className="nav-link">
                Logout {currentUser && currentUser.username}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  const loggedOutNavBar = (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          Jobly
        </NavLink>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/signup" className="nav-link">
                Signup
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  return currentUser ? loggedInNavBar : loggedOutNavBar;
}

export default NavBar;


















// import React, { useContext } from "react";
// import { NavLink } from "react-router-dom";
// import UserContext from "../common/UserContext";
// import "./navbar.css";

// function NavBar({ logout }) {
//   const { currentUser } = useContext(UserContext);

//   const loggedInNavBar = (
//     <nav className="NavBar">
//       <ul>
//         <li>
//           <NavLink to="/" className="NavLink">
//             Jobly
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/companies" className="NavLink">
//             Companies
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/jobs" className="NavLink">
//             Jobs
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/profile" className="NavLink">
//             Profile
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/" onClick={ logout } className="NavLink">
//             Logout {currentUser && currentUser.username}
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );

//   const loggedOutNavBar = (
//     <nav className="NavBar">
//       <ul>
//         <li>
//           <NavLink to="/" className="NavLink">
//             Jobly
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/login" className="NavLink">
//             Login
//           </NavLink>
//         </li>
//         <li>
//           <NavLink to="/signup" className="NavLink">
//             Signup
//           </NavLink>
//         </li>
//       </ul>
//     </nav>
//   );

//   return currentUser ? loggedInNavBar : loggedOutNavBar;
// }

// export default NavBar;
