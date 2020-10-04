import React, { useState, useEffect, useContext } from "react";
import prescrip from "../Assets/images/Prescription.jpg";
import hospital from "../Assets/images/Hospitalfiles.jpg";
import Flyer from "../Assets/images/Flyer.jpg";
import Stickers from "../Assets/images/Stickers.jpg";
import Notebook from "../Assets/images/Notebook.jpg";
import Diary from "../Assets/images/schooldiary.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div
      className="ml-2 mr-2"
      id="Servies"
      style={{ borderBottom: "1px solid #dcdbd7" }}
    >
      <h1
        className="text-center text-capitalize pt-4"
        data-aos="fade-down"
        style={{ fontFamily: "Quicksand" }}
      >
        What We Do{" "}
      </h1>

      <div className="row text-center mt-5 mb-5" data-aos="fade-up">
        <div className="col-12 col-lg-4 col-md-4" data-aos="flip-left">
          <div className="card hover-shadow">
            <div className="card-body">
              <img
                src={prescrip}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2 style={{ fontFamily: "Quicksand" }}>Prescription Pad</h2>
              <p style={{ fontFamily: "Quicksand" }}>
                We print your prescription pads in paper ranging from 70 gsm to
                150 gsm. Mostly all go with 70 to 100 gsm paper. You can also
                consider royal executive bond paper as well for best paper
                quality.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4" data-aos="flip-left">
          <div className="card hover-shadow">
            <div className="card-body">
              <img
                src={hospital}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2 style={{ fontFamily: "Quicksand" }}>Hospital Files </h2>
              <p style={{ fontFamily: "Quicksand" }}>
                We are gratified in providing Hospital Files Printing Services.
                We have specialists who are able of providing these printing
                services with the help of advanced printing machinery.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4" data-aos="flip-left">
          <div className="card hover-shadow">
            <div className="card-body">
              <img
                src={Flyer}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2 style={{ fontFamily: "Quicksand" }}>Leaflets & Flyer</h2>
              <p style={{ fontFamily: "Quicksand" }}>
                Whether you're trying to impress your clients or introduce your
                business to people, flyers and leaflets help you get noticed in
                the era of business. We design professional flyers and Leaflets
                to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row text-center mt-4 mb-4" data-aos="fade-up">
        <div className="col-12 col-lg-4 col-md-4" data-aos="flip-left">
          <div className="card hover-shadow">
            <div className="card-body">
              <img
                src={Stickers}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2 style={{ fontFamily: "Quicksand" }}>Stickers</h2>
              <p style={{ fontFamily: "Quicksand" }}>
                Sticker printing is one of the best ways to present and express
                your message or any texts and quotes effectively with different
                methods. If you are looking for best quality stickers yet
                reasonably priced we are here for you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4" data-aos="flip-left">
          <div className="card hover-shadow">
            <div className="card-body">
              <img
                src={Notebook}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2 style={{ fontFamily: "Quicksand" }}>Notebooks </h2>
              <p style={{ fontFamily: "Quicksand" }}>
                With Aadarsh prinetrs, you can get well designed notebooks at a
                reasonable price. We truely believe that the perfect notebook
                should be functional as well as creative. We provide bulk
                notebook printing service at reasonable price.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-4" data-aos="flip-left">
          <div className="card hover-shadow">
            <div className="card-body">
              <img
                src={Diary}
                className="bd-placeholder-img rounded-circle"
                height="140"
                width="140"
              />
              <h2 style={{ fontFamily: "Quicksand" }}>School Diary</h2>
              <p style={{ fontFamily: "Quicksand" }}>
                They are also an effective way to ensure communication and
                information can be exchanged between students, teachers and
                parents. We have a experties in designing and printing a
                professional school diaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
