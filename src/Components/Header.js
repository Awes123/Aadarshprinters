import React, { useState, useEffect, useContext } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ima from "../Assets/images/pnglogo.png";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#589272" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#" data-aos="zoom-out-right">
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
            <a
              className="nav-link active"
              style={{ color: "white" }}
              aria-current="page"
              href="#sider"
            >
              Home
            </a>
            <a className="nav-link" style={{ color: "white" }} href="#Servies">
              Servies
            </a>
            <a className="nav-link" style={{ color: "white" }} href="#gallery">
              Gallery
            </a>
            <a className="nav-link" style={{ color: "white" }} href="#about">
              About us
            </a>
            <a className="nav-link" style={{ color: "white" }} href="#contact">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
