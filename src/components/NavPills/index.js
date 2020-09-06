import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavPills() {
  //Lets the component check the rote anytime a link iss used to navigate
  const location = useLocation();

  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/projects"
          className={
            location.pathname === "/projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavPills;
