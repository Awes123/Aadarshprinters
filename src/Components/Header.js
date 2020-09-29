import React from "react";
import ima from "../Assets/images/pnglogo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={ima} alt="Logo" style={{ width: 159, height: 65 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#sider">
              Home
            </a>
            <a className="nav-link" href="#Servies">
              Servies
            </a>
            <a className="nav-link" href="#about">
              About us
            </a>
            <a className="nav-link" href="#contact">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
