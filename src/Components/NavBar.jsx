import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top border-bottom">
      <button className="navbar-toggler" type="button" onClick={toggleSidebar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link to="/" className="navbar-brand">
        <img
          className={`youtube-logo ${sidebarOpen ? "d-none" : ""}`}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
          alt="youtube-logo"
          width="120"
          height="30"
        />
      </Link>

      <div
        className={`collapse navbar-collapse ${sidebarOpen ? "show" : ""}`}
        id="navbarNav"
      >
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
