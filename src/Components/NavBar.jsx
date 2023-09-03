import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav className= "navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
    <Link to="/" className="navbar-brand">
        <img 
        className="youtube-logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
        alt="youtube-logo" 
        width="120"
          height="30"
          />
          </Link>
         
       <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
            Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
      </ul>
      <div className="ml-3">
          <i className="fas fa-video fa-lg mr-2"></i>
          <i className="fas fa-th fa-lg mr-2"></i>
          <i className="fas fa-bell fa-lg mr-2"></i>
          <i className="fas fa-user-circle fa-lg"></i>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
