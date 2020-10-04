import React, { useState, useEffect, useContext } from "react";
import imageone from "../Assets/images/Comm2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Commercial = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div style={{ borderBottom: "1px solid #dcdbd7" }}>
      <div className="container mt-5 mb-5">
        <div class="row featurette">
          <div class="col-md-7 order-md-2" data-aos="fade-left">
            <h2
              class="featurette-heading mt-5"
              style={{
                fontSize: 70,
                color: "#589272",
                fontFamily: "Quicksand",
              }}
              data-aos="fade-down-right"
            >
              Commercial <span class="text-muted"> Printing</span>
            </h2>
            <p
              class="lead mt-5"
              style={{ fontFamily: "Quicksand" }}
              data-aos="zoom-in"
            >
              The Aadarsh Printers produces a wide variety of printed materials
              required in Commercial sector, We use the latest technologies and
              advanced machinary in high-speed production presses to produce
              stunning output. We are glad to provide following Commercial
              service to our customers.
            </p>
            <table
              class="table table-borderless"
              style={{ color: "#aeb1b3" }}
              data-aos="flip-right"
            >
              <thead>
                <tr style={{ fontFamily: "Quicksand" }}>
                  <th scope="col" style={{ border: "none" }}>
                    Company Brochure
                  </th>
                  <th scope="col" style={{ border: "none" }}>
                    Books, Diaries
                  </th>
                  <th scope="col" style={{ border: "none" }}>
                    Posters, Flyers
                  </th>
                </tr>
                <tr>
                  <th scope="col" style={{ border: "none" }}>
                    Bill books
                  </th>
                  <th scope="col" style={{ border: "none" }}>
                    Cartons
                  </th>
                  <th scope="col" style={{ border: "none" }}>
                    Business cards
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          <div class="col-md-5 order-md-1" data-aos="fade-right">
            <img
              class="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt="500x500"
              src={imageone}
              data-holder-rendered="true"
              style={{ width: 500, height: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commercial;
