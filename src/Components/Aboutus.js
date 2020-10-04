import React, { useState, useEffect, useContext } from "react";
import imageto from "../Assets/images/flower1.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="container" id="about">
      <div
        className="jumbotron text-center blue-grey lighten-5"
        style={{ marginTop: -77 }}
        data-aos="flip-up"
      >
        <h2
          className="card-title h2"
          style={{ marginTop: -39, fontFamily: "Quicksand" }}
        >
          Who We Are ?
        </h2>

        <p
          className="indigo-text my-4 font-weight-bold"
          style={{ fontFamily: "Quicksand" }}
        >
          Aadarsh Printers is in the service since 2015
        </p>

        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 pb-2">
            <p className="card-text" style={{ fontFamily: "Quicksand" }}>
              Welcome to Aadarsh prinetrs, your number one source in the era of
              printing. We're dedicated to providing you the best of services,
              with a focus on good quality, customer service, and full customer
              satisfaction. We hope you enjoy our products as much as we enjoy
              offering them to you. If you have any questions or comments,
              please don't hesitate to contact us.
            </p>
          </div>
        </div>
        <img
          src={imageto}
          className="mr-4"
          height="160"
          width="160"
          style={{ position: "absolute", marginTop: -100, right: 0 }}
        />
      </div>
    </div>
  );
};

export default Aboutus;
