import React, { useState, useEffect, useContext } from "react";
import imageone from "../Assets/images/corpbro.jpg";
import imageto from "../Assets/images/booklets.jpg";
import imagethree from "../Assets/images/camra.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div
      className=""
      style={{ borderBottom: "1px solid #dcdbd7" }}
      id="gallery"
    >
      <h1
        class="text-center text-capitalize pt-5 "
        style={{ fontFamily: "Quicksand" }}
      >
        Our Products
      </h1>
      <div class="lightbox mt-5 mb-5 mr-3 ml-3">
        <div class="row">
          <div class="col-lg-3" data-aos="zoom-in-down">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-down">
            <img
              src={imageto}
              data-img={imageto}
              alt="Lightbox image 2"
              class="w-100"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-down">
            <img
              src={imagethree}
              data-img={imagethree}
              alt="Disabled image"
              class="w-100 lightbox-disabled"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-down">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imageto}
              data-img={imageto}
              alt="Lightbox image 2"
              class="w-100"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imagethree}
              data-img={imagethree}
              alt="Disabled image"
              class="w-100 lightbox-disabled"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imageto}
              data-img={imageto}
              alt="Lightbox image 2"
              class="w-100"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imagethree}
              data-img={imagethree}
              alt="Disabled image"
              class="w-100 lightbox-disabled"
            />
          </div>
          <div class="col-lg-3" data-aos="zoom-in-up">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
