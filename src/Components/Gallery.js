import React from "react";
import imageone from "../Assets/images/busnies.jpg";
import imageto from "../Assets/images/booklets.jpg";
import imagethree from "../Assets/images/camra.jpg";
const Gallery = () => {
  return (
    <div className="container">
      <h1 class="text-center text-capitalize pt-5 ">Product Gallery</h1>
      <div class="lightbox mt-4 mb-4">
        <div class="row">
          <div class="col-lg-3">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={imageto}
              data-img={imageto}
              alt="Lightbox image 2"
              class="w-100"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={imagethree}
              data-img={imagethree}
              alt="Disabled image"
              class="w-100 lightbox-disabled"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-6">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>

          <div class="col-lg-6">
            <img
              src={imageto}
              data-img={imageto}
              alt="Lightbox image 2"
              class="w-100"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-lg-3">
            <img
              src={imageone}
              data-img={imageone}
              alt="Lightbox image 1"
              class="w-100"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={imageto}
              data-img={imageto}
              alt="Lightbox image 2"
              class="w-100"
            />
          </div>
          <div class="col-lg-3">
            <img
              src={imagethree}
              data-img={imagethree}
              alt="Disabled image"
              class="w-100 lightbox-disabled"
            />
          </div>
          <div class="col-lg-3">
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
