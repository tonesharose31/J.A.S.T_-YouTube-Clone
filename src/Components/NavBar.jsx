import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className= "nav .bg-danger fixed-top border-bottom">
        <h2>
          Youtube
        </h2>
      <ul className="row align-items-start">
        <li class="nav-link col">
          <Link to="/">Home</Link>
        </li>
        <li class="nav-link col">
          <Link to="/about">About</Link>
        </li >
      </ul>
    </nav>
  );
};

export default NavBar;
