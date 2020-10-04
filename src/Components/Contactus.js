import React, { useState, useEffect, useContext } from "react";
import imagethree from "../Assets/images/contact.png";
import Fab from "@material-ui/core/Fab";
import AOS from "aos";
import "aos/dist/aos.css";
import Axios from "axios";
const nodemailer = require("nodemailer");

const Contactus = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async () => {
    const from = await Axios.post("/api/form", {
      name,
      email,
      mobile,
      message,
    });
  };
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div className="" id="contact">
      <div className="row mt-5 mb-5 col-lg-12">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="card" data-aos="fade-right">
            <div
              id="map-container-google-1"
              className="z-depth-1-half map-container"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15008.344640683788!2d75.3673927!3d19.8785834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcffa8235ad4d3d28!2sAdarsh%20Printers!5e0!3m2!1sen!2sin!4v1601675995224!5m2!1sen!2sin"
                frameBorder="0"
                style={{ border: 0 }}
                width="620"
                height="550"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div
            className="card"
            data-aos="fade-left"
            style={{
              backgroundImage: `url(${imagethree})`,
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(88, 146, 114, 0.6)" }}
            ></div>
            <div className="card-body" style={{ zIndex: 1 }}>
              <h4 className="card-title">
                <div className="container mb-5">
                  <h1
                    className="text-center text-capitalize pt-5 "
                    style={{ fontFamily: "Quicksand" }}
                  >
                    Get in touch
                  </h1>
                </div>
              </h4>
              <div className="w-50 mx-auto">
                <form
                  action="/action_page.php"
                  style={{ fontFamily: "Quicksand" }}
                >
                  <div className="form-group">
                    <input
                      type="text"
                      id="defaultContactFormEmail"
                      className="form-control mb-4"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      id="defaultContactFormEmail"
                      className="form-control mb-4"
                      placeholder="Enter E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      id="defaultContactFormEmail"
                      className="form-control mb-4"
                      placeholder="Enter Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control "
                      placeholder="Enter Your Message"
                      rows="6"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        target="_blank"
        className="btnWhatsapp"
        href="https://api.whatsapp.com/send?phone=919561801015&text=Hi%20Aadarsh%20Printers,%20Help%20me%20get%20started!"
      >
        <Fab color="default" aria-label="add">
          <i
            className="fab fa-whatsapp"
            style={{ fontSize: 24, color: "#25d366" }}
          ></i>
        </Fab>
      </a>
    </div>
  );
};

export default Contactus;
