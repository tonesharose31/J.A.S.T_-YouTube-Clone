import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className= "nav .bg-danger fixed-top border-bottom">
        <h2>
        <img class="youtube-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU" alt="youtube-logo" />
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
